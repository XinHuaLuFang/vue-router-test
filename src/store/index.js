import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: 1
  },
  mutations: {
    SET_ROLE(state, role) {
      state.role = role
    }
  }
})
