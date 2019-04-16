<script>
import Navigation from "js/vue/components/app/navigation";
import NavigationBrandsMenu from "./NavigationBrandsMenu";

export default {
  name: "NavigationBrands",
  components: {
    Navigation,
    NavigationBrandsMenu
  },
  mounted: function() {
    this.$store.dispatch("moduleBrands/getBrands");
  },
  computed: {
    brandsClass: function() {
      return this.$store.getters["moduleBrands/brandsNavigation"];
    },
    brandsMenu: function() {
      return this.$store.getters["moduleBrands/brandsList"];
    }
  },
  methods: {
    brandsHide: function() {
      this.$store.dispatch("moduleBrands/getBrandsMenu"); // module name/action
      return this.$store.getters["moduleBrands/noScroll"];
    }
  }
};
</script>

<template>
  <Navigation :class="brandsClass" @hide-navigation="brandsHide">
    <NavigationBrandsMenu :list="brandsMenu" />
  </Navigation>
</template>
