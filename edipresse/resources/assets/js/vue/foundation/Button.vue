<script>
export default {
  name: "Button",
  props: ["title", "arrow"],
  methods: {
    buttonClick: function() {
      this.$emit("buttonClick");
    }
  }
};
</script>

<template>
  <button class="btn" @click="buttonClick" :arrow="arrow">
    <div>{{ title }}</div>
    <div v-if="arrow" class="btn-icon position-relative">
      <img svg-inline src="svg/inline/button-arrow-right.svg" />
    </div>
  </button>
</template>
