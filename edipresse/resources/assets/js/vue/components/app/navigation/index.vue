<script>
export default {
  name: "Navigation",
  methods: {
    hideNavigation: function() {
      this.$emit("hide-navigation");
    }
  }
};
</script>

<template>
  <nav class="navigation d-flex flex-column h-100 w-100 position-fixed">
    <div class="navigation-header flex-grow-0 flex-shrink-0 w-100">
      <div class="container-fluid h-100 d-flex align-items-center">
        <button
          class="navigation-close d-flex align-items-center justify-content-center"
          @click.stop.prevent="hideNavigation"
        >
          <div class="navigation-close--icon position-relative">
            <img svg-inline src="svg/inline/close.svg" />
          </div>
        </button>
        <div class="navigation-header--logo">
          <img svg-inline src="svg/inline/edipresse-logo-e.svg" />
        </div>
      </div>
    </div>
    <div
      class="navigation-body flex-grow-1 flex-shrink-1"
      v-lazy-container="{ selector: 'img' }"
    >
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>
