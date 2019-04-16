<script>
export default {
  name: "ButtonLink",
  props: ["title", "href", "arrow"]
};
</script>

<template>
  <a class="btn" :href="href" :arrow="arrow">
    <div v-html="title"></div>
    <div v-if="arrow" class="btn-icon position-relative">
      <img svg-inline src="svg/inline/button-arrow-right.svg" />
    </div>
  </a>
</template>
