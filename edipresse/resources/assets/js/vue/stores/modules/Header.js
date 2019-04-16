const moduleHeader = {
  namespaced: true,
  state: {
    blueTheme: false,
    whiteTheme: false,
    transparentTheme: false
  },
  mutations: {
    setBlueTheme(state) {
      state.blueTheme = !state.blueTheme;
    },
    setWhiteTheme(state) {
      state.whiteTheme = !state.whiteTheme;
    },
    setTransparentTheme(state) {
      state.transparentTheme = !state.transparentTheme;
    },
    setDefaultTheme(state) {
      state.blueTheme = false;
      state.whiteTheme = false;
      state.transparentTheme = false;
    }
  },
  getters: {
    headerTheme: (state) => {
      return {
        blue: state.blueTheme,
        white: state.whiteTheme,
        transparent: state.transparentTheme
      };
    }
  },
  actions: {
    getBlueTheme({ commit }) {
      commit("setBlueTheme");
    },
    getWhiteTheme({ commit }) {
      commit("setWhiteTheme");
    },
    getTransparentTheme({ commit }) {
      commit("setTransparentTheme");
    },
    getDefaultTheme({ commit }) {
      commit("setDefaultTheme");
    }
  }
};

export default moduleHeader;
