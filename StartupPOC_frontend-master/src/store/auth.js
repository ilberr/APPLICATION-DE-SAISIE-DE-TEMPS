import axios from 'axios';

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
        register: false,
        emailConfirmed: false,
        role: null,
        username: null
    },
    getters: {
        authenticated(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        },
        registered(state) {
            return state.register;
        },
        getEmailConfirmed(state) {
            if (state.register == false) {
                return false;
            } else if (state.register != false && state.emailConfirmed == false) {
                return true;
            }
        },
        getrole(state) {
            return state.role;
        },
        getUsername(state) {
            return state.username;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_REGISTER(state) {
            state.register = true;
        },
        SET_EMAIL_CONFIRM(state, data) {
            state.emailConfirmed = data;
        },
        SET_ROLE(state, role) {
            state.role = role;
        },
        SET_USERNAME(state, username) {
            state.username = username;
        }
    },

    actions: {
        async signIn({ dispatch, commit }, credentials) {
            let response = await axios.post("/auth/login", credentials);
            commit("SET_USERNAME", response.data.username)
            return dispatch("attempt", response.data)
        },

        signOut({ commit }) {
            return new Promise((resolve, reject) => {
                if (localStorage.getItem('token') && localStorage.getItem('username')) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('username')
                    commit('SET_TOKEN', null);
                    commit('SET_USER', null);
                    commit('SET_EMAIL_CONFIRM', false)
                    commit('SET_ROLE', null)
                    resolve(true)
                } else {
                    reject(false)
                }

            })
        },

        register({ commit }, credentials) {
            return axios.post("/auth/signup", credentials).then((res) => {
                commit("SET_REGISTER", true)
                commit("SET_EMAIL_CONFIRM", res.data.enabled)
                commit("SET_ROLE", res.data.role.label)

            });
        },
        async attempt({ commit, state }, data) {

            if (data != null) {
                if (data.authenticationToken) {
                    commit('SET_TOKEN', data.authenticationToken)
                }
                if (!state.token)
                    return;

                try {
                    let user = await axios.get(`/auth/info/${data.username}`)
                        // console.log(user);
                    localStorage.setItem("username", data.username);
                    commit("SET_EMAIL_CONFIRM", user.data.enabled)
                    commit('SET_USER', user.data)
                    commit('SET_ROLE', user.data.role.label)
                } catch (error) {
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                    commit('SET_ROLE', null)
                    console.log(error);
                }
            }
        }
    }
}