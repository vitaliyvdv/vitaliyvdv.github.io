<script>
export default {
  name: "TopBanner",
  props: ["img", "title"]
};
</script>

<template>
  <div class="topbanner">
    <div v-if="img" class="topbanner-img position-relative w-100">
      <img class="position-absolute w-100" :src="img" :alt="title" />
    </div>
    <slot></slot>
  </div>
</template>
