const moduleNavigation = {
  namespaced: true,
  state: {
    navigation: false,
    bodyscroll: true
  },
  getters: {
    noScroll: (state) => {
      const disableBodyScroll = bodyScrollLock.disableBodyScroll;
      const enableBodyScroll = bodyScrollLock.enableBodyScroll;
      const body = document.body;
      if (!state.bodyscroll) {
        disableBodyScroll(body);
      } else {
        enableBodyScroll(body);
      }
    },
    navigationClass: (state) => {
      return state.navigation ? "active" : "";
    }
  },
  mutations: {
    navigationState(state) {
      state.navigation = !state.navigation;
      state.bodyscroll = !state.bodyscroll;
    }
  },
  actions: {
    navigationState({ commit }) {
      commit("navigationState");
    }
  }
};

export default moduleNavigation;
