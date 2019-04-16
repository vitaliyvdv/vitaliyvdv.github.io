import moduleHeader from "./modules/Header";
import moduleMenu from "./modules/Menu";
import moduleNavigation from "./modules/Navigation";
import moduleBrands from "./modules/Brands";

Vue.use(Vuex);

var store = new Vuex.Store({
  modules: {
    moduleHeader,
    moduleMenu,
    moduleNavigation,
    moduleBrands
  }
});

export default store;
