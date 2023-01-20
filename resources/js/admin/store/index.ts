import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    userInfo: {}
  },
  getters: {
    getUserInfo: (state) => () => {
			return state.userInfo
		}
  },
  mutations: {
    setLoadingStatus(state, status = false) {
			state.isLoading = status
		},
    setUserInfo(state, user) {
			state.userInfo = user;
		},
  },
  actions: {
  },
  modules: {
  }
})
