<script>
export default {
  name: "FooterBrands",
  data() {
    return {
      brands: [
        {
          title: "Beauty.ua",
          url: "https://beauty.ua/",
          img: '<img svg-inline src="svg/brands/beauty.svg" />',
          class: "beauty"
        },
        {
          title: "edinstvennaya.ua",
          url: "http://edinstvennaya.ua/",
          img: '<img svg-inline src="svg/brands/edinstvennaya.svg" />',
          class: "edinstvennaya"
        },
        {
          title: "superdom.ua",
          url: "https://superdom.ua/",
          img: '<img svg-inline src="svg/brands/superdom.svg" />',
          class: "superdom"
        },
        {
          title: "tvoymalysh.com.ua",
          url: "http://tvoymalysh.com.ua/",
          img: '<img svg-inline src="svg/brands/tvoymalysh.svg" />',
          class: "tvoymalysh"
        },
        {
          title: "4mama.ua",
          url: "http://4mama.ua/",
          img: '<img svg-inline src="svg/brands/4mama.svg" />',
          class: "for-mama"
        },
        {
          title: "viva.ua",
          url: "https://viva.ua/",
          img: '<img svg-inline src="svg/brands/viva.svg" />',
          class: "viva"
        },
        {
          title: "destinations.com.ua",
          url: "https://destinations.com.ua/",
          img: '<img svg-inline src="svg/brands/destinations.svg" />',
          class: "destinations"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="footer-brands">
    <ul
      class="footer-brands--list list-unstyled d-flex flex-wrap align-items-center justify-content-center justify-content-xl-between my-0"
    >
      <li
        class="footer-brands--item"
        v-for="(item, index) in brands"
        :key="index"
      >
        <a
          :class="['footer-brands--link d-block', item.class]"
          :href="item.url"
          rel="noopener"
          target="_blank"
          :aria-label="item.title"
        >
          <div
            :class="['footer-brands--icon position-relative', item.class]"
            v-html="item.img"
          ></div>
        </a>
      </li>
    </ul>
  </div>
</template>
