<script>
export default {
  name: "LandingPageStart",
  props: ["description", "img"]
};
</script>

<template>
  <div class="landing-item landing-start position-relative">
    <div class="landing-start--media position-relative">
      <img :src="img" alt="" />
    </div>
    <div class="landing-start--main">
      <div class="container h-100 d-flex align-items-center">
        <div class="landing-start--content">
          <div class="landing-start--logo position-relative">
            <img svg-inline src="svg/inline/edipresse-logo-for-landing.svg" />
          </div>
          <div class="landing-start--description" v-html="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>
