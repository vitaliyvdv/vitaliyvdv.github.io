const moduleBrands = {
  namespaced: true,
  state: {
    brands: [],
    menu: false,
    bodyscroll: true
  },
  mutations: {
    setBrands(state, brands) {
      state.brands = brands;
    },
    setBrandsMenu(state) {
      state.menu = !state.menu;
      state.bodyscroll = !state.menu;
    }
  },
  getters: {
    brandsList: (state) => {
      return state.brands;
    },
    brandsNavigation: (state) => {
      return state.menu ? "active" : "";
    },
    noScroll: (state) => {
      const disableBodyScroll = bodyScrollLock.disableBodyScroll;
      const enableBodyScroll = bodyScrollLock.enableBodyScroll;
      const body = document.body;
      if (!state.bodyscroll) {
        disableBodyScroll(body);
      } else {
        enableBodyScroll(body);
      }
    }
  },
  actions: {
    getBrands({ commit }) {
      axios
        .get("/dist/data/brands.json")
        .then((response) => response.data)
        .catch((error) => console.log(error))
        .then((menu) => {
          commit("setBrands", menu);
        });
    },
    getBrandsMenu({ commit }) {
      commit("setBrandsMenu");
    }
  }
};

export default moduleBrands;
