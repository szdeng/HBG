import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:null,
    isLogin:false,
    token:"",
    userImage:null,//用户头像
  },
  getters,
  mutations,
  actions
})
