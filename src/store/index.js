import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:1,
    ...JSON.parse(sessionStorage.getItem('state')),
    phone:'',
    shop_info:'',
  },
  mutations: {
    login(state,payload){
        state.login=payload;
        sessionStorage.setItem('state',JSON.stringify(state))
    }
  },
  actions: {
    
  },
  modules: {
  }
})
