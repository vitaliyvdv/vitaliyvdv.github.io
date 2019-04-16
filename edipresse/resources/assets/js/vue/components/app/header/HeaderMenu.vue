<script>
export default {
  name: "HeaderMenu",
  mounted() {
    this.$store.dispatch("getMenu");
  },
  computed: {
    headerMenu: function() {
      return this.$store.state.moduleMenu.menu;
    }
  },
  methods: {
    brandsMenu: function() {
      this.$store.dispatch("moduleBrands/getBrandsMenu"); // module name/action
      return this.$store.getters["moduleBrands/noScroll"];
    }
  }
};
</script>

<template>
  <nav class="menu position-absolute w-100 h-100">
    <ul
      class="menu-list list-unstyled h-100 d-flex align-items-center justify-content-end"
    >
      <template v-for="item in headerMenu">
        <template v-if="item.showInTop == 1">
          <li
            v-if="item.title.match(/Бренд/gi)"
            class="menu-item d-md-block"
            :key="item.id"
          >
            <a
              class="menu-item--link d-flex align-items-center"
              @click.stop="brandsMenu"
            >
              <div class="menu-item--icon position-relative">
                <img svg-inline src="svg/inline/apps-button.svg" />
              </div>
              <span class="menu-item--title">{{ item.title }}</span>
            </a>
          </li>
          <li v-else class="menu-item d-none d-md-block" :key="item.id">
            <a
              class="menu-item--link d-flex align-items-center"
              :href="item.link"
            >
              <span class="menu-item--title">{{ item.title }}</span>
            </a>
          </li>
        </template>
      </template>
    </ul>
  </nav>
</template>
