import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import project from './project'
import time from './time'
import user from './user'
import role from './role'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    project,
    time,
    user,
    role
  }
})
