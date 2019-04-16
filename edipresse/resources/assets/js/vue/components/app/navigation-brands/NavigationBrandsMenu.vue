<script>
export default {
  name: "NavigationBrandsMenu",
  props: ["list"],
  directives: {
    "brand-hover": {
      inserted: function(el, binding, vnode) {
        const ref = vnode.context.$refs.brandMenuItem;
        el.addEventListener("mouseover", function() {
          for (var a = 0; a < ref.length; a++) {
            ref[a].classList.add("opacity");
          }
          el.classList.remove("opacity");
        });

        el.addEventListener("mouseout", function() {
          for (var a = 0; a < ref.length; a++) {
            ref[a].classList.remove("opacity");
          }
        });
      }
    }
  }
};
</script>

<template>
  <div class="navigation-brands">
    <ul class="navigation-brands--list list-unstyled row mx-0">
      <template v-for="item in list">
        <li
          class="navigation-brands--item col-6 col-sm-4 col-lg-3 px-0"
          :key="item.id"
        >
          <a
            class="navigation-brands--link d-flex justify-content-center w-100"
            :href="item.link"
            :aria-label="item.title"
            ref="brandMenuItem"
            v-brand-hover
          >
            <div class="navigation-brands--icon position-relative w-100">
              <img :data-src="item.icon" />
            </div>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>
