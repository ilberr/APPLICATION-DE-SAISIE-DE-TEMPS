import axios from 'axios';

export default {
    namespaced: true,
    state: {
        users: [],
        currentUser: {},
        usersOfManager: []
    },
    getters: {
        GET_USERS(state) {
            return state.users;
        },
        GET_CURRENT_USER(state) {
            return state.currentUser;
        },
        GET_USERS_OF_MANAGER(state) {
            return state.usersOfManager;
        },
        GET_MANAGERS(state) {
            return state.users.filter(obj => obj.role.id == 2);
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_CURRENT_USER(state, currentUser) {
            state.currentUser = currentUser;
        },
        SET_USERS_OF_MANAGER(state, users) {
            state.usersOfManager = users;
        }
    },

    actions: {
        getUsers({ commit }) {
            return axios.get("/v1/users").then((res) => {
                commit("SET_USERS", res.data)
            });
        },
        getCurrentUser({ commit }, idUser) {
            return axios.get(`/v1/users/${idUser}`).then((res) => {
                console.log(res);
                commit("SET_CURRENT_USER", res.data)
            });
        },
        getUsersOfManager({ commit }, idManager) {
            return axios.get(`/v1/users/manager/${idManager}`).then((res) => {
                commit("SET_USERS_OF_MANAGER", res.data)
            });
        },

        async deleteUser({ dispatch }, idUser) {
            await axios.get(`/v1/users/disable/${idUser}`)
                .catch(function(error) {
                    console.log(error);
                });
            return dispatch("getUsers");
        },
        async updateUser({ dispatch }, user) {
            await axios.post(`/v1/users/edit`, user)
                .catch(function(error) {
                    console.log(error);
                });
            dispatch("getUsers");
            return dispatch("getCurrentUser", user.userId);
        },
        async updateUserOfManager({ dispatch }, user) {

            await axios.post(`/v1/users/edit`, user)
                .catch(function(error) {
                    console.log(error);
                });
            dispatch("getUsersOfManager", user.manager.userId);
            return dispatch("getCurrentUser", user.userId);
        },
        async addUser({ dispatch }, data) {
            await axios.post(`/v1/users/create/${data.id}`, data.user)
                .catch(function(error) {
                    console.log(error);
                });
            return dispatch("getUsers");
        }
    }
}