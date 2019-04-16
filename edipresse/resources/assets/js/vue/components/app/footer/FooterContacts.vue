<script>
export default {
  name: "FooterContacts"
};
</script>

<template>
  <div class="footer-contacts">
    <div class="footer-contacts--item d-lg-flex">
      <div
        class="footer-contacts--icon d-flex align-items-center justify-content-center"
      >
        <div class="footer-contacts--icon-block">
          <img svg-inline src="svg/inline/location.svg" />
        </div>
      </div>
      <div class="footer-contacts--content">
        <p>04070, Киев,</p>
        <p>ул. Спасская, 24/15</p>
      </div>
    </div>
    <div class="footer-contacts--item d-lg-flex">
      <div
        class="footer-contacts--icon d-flex align-items-center justify-content-center"
      >
        <div class="footer-contacts--icon-block">
          <img svg-inline src="svg/inline/phone.svg" />
        </div>
      </div>
      <div class="footer-contacts--content">
        <p>
          <a href="tel:+380444989880">+38 (044) 498-98-80</a>
        </p>
        <p>
          <a href="tel:+380672465859">+38 (067) 246-58-59</a>
        </p>
      </div>
    </div>
    <div class="footer-contacts--item d-lg-flex">
      <div
        class="footer-contacts--icon d-flex align-items-center justify-content-center"
      >
        <div class="footer-contacts--icon-block">
          <img svg-inline src="svg/inline/mail.svg" />
        </div>
      </div>
      <div class="footer-contacts--content">
        <p>
          <a href="mailto:edipresse-info@edipresse.com.ua"
            >edipresse-info@edipresse.com.ua</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
