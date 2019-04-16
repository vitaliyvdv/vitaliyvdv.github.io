<script>
export default {
  name: "Select",
  props: ["id", "name", "list", "placeholder", "className"]
};
</script>

<template>
  <select
    :class="['custom-select', className]"
    :name="name"
    :id="id"
    v-model="selected"
  >
    <option disabled value="">{{ placeholder }}</option>
    <template v-for="(item, index) in list">
      <option :key="index" :value="item.value">{{ item.text }}</option>
    </template>
  </select>
</template>
