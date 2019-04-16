<script>
export default {
  name: "FooterSocial",
  data() {
    return {
      social: [
        {
          title: "Facebook",
          link: "#",
          icon: "facebook-f"
        },
        {
          title: "Instagram",
          link: "#",
          icon: "instagram"
        }
      ]
    };
  }
};
</script>

<template>
  <section class="footer-social">
    <ul
      class="footer-social--list list-unstyled d-flex align-items-center justify-content-center"
    >
      <template v-for="(item, index) in social">
        <li class="footer-social--item" :key="index">
          <a
            class="footer-social--link d-flex align-items-center justify-content-center"
            :href="item.link"
            :aria-label="item.title"
          >
            <font-awesome-icon :icon="['fab', item.icon]"></font-awesome-icon>
          </a>
        </li>
      </template>
    </ul>
  </section>
</template>
