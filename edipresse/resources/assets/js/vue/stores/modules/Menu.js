const moduleMenu = {
  state: {
    menu: null
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    }
  },
  actions: {
    getMenu({ commit }) {
      axios
        .get("/dist/data/menu.json")
        .then((response) => response.data)
        .catch((error) => console.log(error))
        .then((menu) => {
          commit("setMenu", menu);
        });
    }
  }
};

export default moduleMenu;
