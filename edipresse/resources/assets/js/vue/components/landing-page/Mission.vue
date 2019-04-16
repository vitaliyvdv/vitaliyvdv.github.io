<script>
import LandingPageTitle from "./Title";
import ScrollmagicElement from "vue/directives/ScrollmagicElement";

export default {
  name: "LandingPageMission",
  components: {
    LandingPageTitle
  },
  props: ["title", "list"],
  directives: {
    "scrollmagic-element": ScrollmagicElement
  }
};
</script>

<template>
  <section class="landing-item landing-mission w-100 position-relative">
    <div class="container position-relative">
      <LandingPageTitle
        class="justify-content-center justify-content-xl-start"
        :title="title"
      />
      <div class="mission">
        <div class="mission-list d-md-flex flex-wrap">
          <template v-for="(item, index) in list">
            <section
              :key="item.id"
              class="mission-item"
              v-scrollmagic-element="{ triggerHook: 1 }"
            >
              <a
                class="mission-item--link d-block h-100 position-relative"
                :href="item.url"
              >
                <div
                  class="mission-item--media d-none d-xl-block position-absolute w-100 h-100"
                >
                  <img :src="item.img" :alt="item.title" />
                </div>
                <div class="mission-item--content position-relative">
                  <div class="mission-item--step font-title">
                    0{{ index + 1 }}
                  </div>
                  <h3 class="mission-item--title">{{ item.title }}</h3>
                  <div class="mission-item--intro">{{ item.descr }}</div>
                </div>
              </a>
            </section>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
