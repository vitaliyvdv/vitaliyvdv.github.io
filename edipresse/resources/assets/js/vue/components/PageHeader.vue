<script>
export default {
  name: "PageHeader",
  props: ["title", "img"]
};
</script>

<template>
  <div class="page-header">
    <div class="page-header--wrapper">
      <div class="page-header--img">
        <template v-if="img">
          <img :src="img" :alt="title" />
        </template>
        <template v-else
          >svg-logo</template
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>
