import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: ""
  },
  getters: {},
  mutations: {
    setRole(state,role){
      state.role = role;
    }
  },
  actions: {
    login: ({commit},{user,password}) => {
      // console.log(login)
      if (user == "admin" && password == "1234") {
        commit("setRole","admin")
      } else {
        commit("setRole","student")        
      }
    }
  }
});
