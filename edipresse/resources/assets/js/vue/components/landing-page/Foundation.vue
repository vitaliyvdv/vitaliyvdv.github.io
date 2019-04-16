<script>
import ButtonLink from "js/vue/foundation/ButtonLink";
import LandingPageTitle from "./Title";
import ScrollmagicElement from "vue/directives/ScrollmagicElement";

export default {
  name: "LandingPageFoundation",
  components: {
    ButtonLink,
    LandingPageTitle
  },
  props: ["title", "img", "description", "url"],
  directives: {
    "scrollmagic-element": ScrollmagicElement
  }
};
</script>

<template>
  <section class="landing-item landing-foundation w-100 position-relative">
    <div class="container">
      <div class="foundation d-flex flex-wrap position-relative">
        <div class="foundation-content order-2 order-xl-1">
          <LandingPageTitle class="justify-content-center" :title="title" />
          <div
            class="foundation-content--text"
            v-html="description"
            v-scrollmagic-element="{ triggerHook: 0.5 }"
          ></div>
          <div class="foundation-content--action d-flex justify-content-center">
            <ButtonLink
              class="btn-white"
              title="Допомогти"
              :href="url"
              arrow="true"
            />
          </div>
        </div>
        <div
          class="foundation-media d-flex justify-content-center order-1 order-xl-2"
        >
          <div
            class="foundation-media--img position-relative"
            v-scrollmagic-element="{ triggerHook: 1 }"
          >
            <img class="position-absolute w-100" v-lazy="img" alt="" />

            <div
              class="foundation-media--img-back position-absolute w-100 h-100"
              v-scrollmagic-element="{ triggerHook: 0.5 }"
            >
              <img class="position-absolute w-100" v-lazy="img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
