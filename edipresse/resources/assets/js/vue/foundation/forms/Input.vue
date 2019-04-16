<script>
export default {
  name: "Input",
  props: ["type", "placeholder", "value", "label", "name", "className", "id"]
};
</script>

<template>
  <input
    :id="id"
    :class="['form-control', className]"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    v-model="value"
  />
</template>
