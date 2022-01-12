import axios from 'axios';

export default {
    namespaced: true,
    state: {
        projects: []
    },
    getters: {
        GET_PROJECTS(state) {
            return state.projects;
        }
    },
    mutations: {
        SET_PROJECTS(state, projects) {
            state.projects = projects;
        },
    },

    actions: {
        async getProjects({ commit }) {
            //axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            const res = await axios.get("/v1/projects");
            commit("SET_PROJECTS", res.data);
        },
        async addProject({ dispatch }, data) {
            await axios.post(`/v1/projects/${data.username}`, data.project)
                .catch(function(error) {
                    console.log(error);
                });
            return dispatch("getProjects");

        }
    }
}