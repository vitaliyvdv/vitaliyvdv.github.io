<script>
import FooterSocial from "./FooterSocial.vue";
import FooterContacts from "./FooterContacts.vue";
import FooterMenu from "./FooterMenu.vue";
import FooterBrands from "./FooterBrands.vue";

export default {
  name: "Footer",
  components: {
    FooterSocial,
    FooterMenu,
    FooterContacts,
    FooterBrands
  },
  data() {
    return {};
  }
};
</script>

<template>
  <footer class="footer flex-grow-0 flex-shrink-0">
    <div class="container d-flex flex-column">
      <div
        class="footer-content d-flex flex-column align-items-center align-items-lg-stretch flex-lg-row justify-content-lg-between"
      >
        <div class="footer-company">
          <div class="footer-logo">
            <img svg-inline src="svg/inline/edipresse-logo-footer.svg" />
          </div>
          <FooterSocial />
        </div>
        <FooterMenu />
        <FooterContacts />
      </div>
      <FooterBrands />
    </div>
  </footer>
</template>
