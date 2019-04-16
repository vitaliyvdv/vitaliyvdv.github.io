<script>
export default {
  name: "LandingPageTitle",
  props: {
    title: String
  }
};
</script>

<template>
  <h2
    class="landing-header d-flex align-items-center flex-grow-0 flex-shrink-0 w-100"
  >
    <div class="landing-header-wrapper">
      <span>Edipresse Media Ukraine</span>- {{ title }}
    </div>
  </h2>
</template>
