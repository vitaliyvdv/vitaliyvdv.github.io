<script>
import HeaderMenu from "./HeaderMenu.vue";
import NavigationBrands from "js/vue/components/app/navigation-brands/";

export default {
  name: "Header",
  components: {
    HeaderMenu,
    NavigationBrands
  },
  methods: {
    initNavigation: function() {
      this.$store.dispatch("moduleNavigation/navigationState"); // module name/action
      return this.$store.getters["moduleNavigation/noScroll"];
    }
  },
  computed: {
    headerTheme: function() {
      return this.$store.getters["moduleHeader/headerTheme"];
    }
  }
};
</script>

<template>
  <header :class="['header flex-grow-0 flex-shrink-0 w-100', headerTheme]">
    <div class="container-fluid h-100">
      <div
        class="header-wrapper h-100 d-flex align-items-center position-relative"
      >
        <button
          class="header-nemu d-flex align-items-center justify-content-center p-0"
          aria-label="Меню"
          @click.stop.prevent="initNavigation"
        >
          <div class="header-nemu--icon"></div>
        </button>
        <h1 class="header-logo d-flex align-items-center">
          <a
            class="header-logo--link d-block position-relative"
            href="/"
            aria-label="Edipresse"
          >
            <img svg-inline src="svg/inline/edipresse-logo-e.svg" />
          </a>
        </h1>
        <HeaderMenu />
      </div>
    </div>
    <NavigationBrands />
  </header>
</template>
