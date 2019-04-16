<script>
export default {
  name: "FooterMenu",
  mounted() {
    this.$store.dispatch("getMenu");
  },
  computed: {
    footerMenu: function() {
      return this.$store.state.moduleMenu.menu;
    }
  }
};
</script>

<template>
  <nav class="footer-services d-none d-lg-block">
    <ul class="footer-services--list list-unstyled mb-0">
      <template v-for="item in footerMenu">
        <li :key="item.id" class="footer-services--item text-uppercase">
          <a class="footer-services--link d-inline-block" :href="item.link">
            {{ item.title }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>
