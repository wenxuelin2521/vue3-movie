import { createStore } from 'vuex'

export default createStore({
  state: {
    count:10
  },
  getters:{
    total(state){
      return state.count *2
    }
  },
  mutations: {
    SET_COUNT(state , value){
      state.count = value
    }
  },
  actions: {
  },
  modules: {
  }
})
