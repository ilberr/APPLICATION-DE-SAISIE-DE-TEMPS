import axios from 'axios';

export default {
    namespaced: true,
    state: {
        roles:[],
    },
    getters: {
        GET_ROLES(state) {
            return state.roles;
        },
    },
    mutations: {
        SET_ROLES(state, roles) {
            state.roles = roles;
        },
    },

    actions: {
        getRoles({ commit }) {
            return axios.get("/v1/roles").then((res) => {
                commit("SET_ROLES", res.data)
            });
        },
    }
}
