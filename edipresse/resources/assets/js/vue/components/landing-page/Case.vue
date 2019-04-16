<script>
import LandingPageTitle from "./Title";
import ScrollmagicElement from "vue/directives/ScrollmagicElement";

export default {
  name: "LandingPageCase",
  components: {
    LandingPageTitle
  },
  props: ["title", "list"],
  updated: function() {
    this.$nextTick(() => {
      this.sliderCase();
    });

    /*setTimeout(() => {
      this.sliderCase();
    }, 0);*/
  },
  directives: {
    "scrollmagic-element": ScrollmagicElement
  },
  methods: {
    sliderCase: function() {
      const myslider = tns({
        container: this.$refs.caseSlider,
        mode: "gallery",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: false,
        autoWidth: false,
        slideBy: 1,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        controls: true,
        controlsContainer: this.$refs.sliderNavigation,
        nav: true,
        navContainer: this.$refs.caseThumbnails,
        loop: true,
        autoHeight: true,
        touch: true,
        mouseDrag: false
      });
    }
  }
};
</script>

<template>
  <div class="landing-item landing-case w-100 position-relative">
    <div class="container">
      <div class="case d-xl-flex">
        <div class="case-left d-flex flex-column">
          <LandingPageTitle
            class="justify-content-center justify-content-xl-start"
            :title="title"
          />
          <div
            class="case-block d-none d-xl-block flex-grow-1 flex-shrink-0"
            v-scrollmagic-element="{ triggerHook: 1 }"
          >
            <div
              class="case-block--wrapper h-100 position-relative"
              v-scrollmagic-element="{ triggerHook: 1 }"
            >
              <ul
                class="case-list list-unstyled d-flex flex-wrap"
                ref="caseThumbnails"
              >
                <template v-for="item in list">
                  <li
                    :key="item.id"
                    class="case-list--item d-flex align-items-center justify-content-center"
                  >
                    <div
                      class="case-list--link d-block position-relative w-100"
                    >
                      <img
                        class="position-absolute w-100"
                        v-lazy="item.icon"
                        :alt="item.title"
                      />
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <div class="case-right d-flex justify-content-center d-xl-block">
          <div class="case-slider position-relative">
            <ul
              class="case-about list-unstyled"
              v-scrollmagic-element="{ triggerHook: 0.5 }"
              ref="caseSlider"
            >
              <template v-for="item in list">
                <li
                  :key="item.id"
                  class="case-about--item"
                  :data-case="item.id"
                >
                  <a
                    class="case-about--img d-block position-relative overflow-hidden"
                    :href="item.url"
                  >
                    <div class="case-about--img-wrapper">
                      <img
                        class="position-absolute w-100"
                        :src="item.img"
                        :alt="item.title"
                      />
                    </div>
                  </a>
                  <h3 class="case-about--title">{{ item.title }}</h3>
                  <div class="case-about--description">
                    <p>{{ item.descr }}</p>
                  </div>
                </li>
              </template>
            </ul>
            <div class="case-slider--nav position-absolute w-100">
              <div
                class="case-slider--nav-block d-flex justify-content-between align-items-center w-100 h-100"
                ref="sliderNavigation"
              >
                <div
                  class="case-slider--nav-item d-flex align-items-center justify-content-center"
                >
                  <div class="case-slider--nav-icon">
                    <img svg-inline src="svg/inline/left-arrow.svg" />
                  </div>
                </div>
                <div
                  class="case-slider--nav-item d-flex align-items-center justify-content-center"
                >
                  <div class="case-slider--nav-icon">
                    <img svg-inline src="svg/inline/right-arrow.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
