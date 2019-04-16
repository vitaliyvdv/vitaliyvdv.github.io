<script>
import LandingPageTitle from "./Title";
import Counter from "js/vue/foundation/Counter";
import ScrollmagicElement from "vue/directives/ScrollmagicElement";

export default {
  name: "LandingPageStatistic",
  components: {
    LandingPageTitle,
    Counter
  },
  props: ["title", "list"],
  directives: {
    "scrollmagic-element": ScrollmagicElement
  }
};
</script>

<template>
  <section class="landing-item landing-statistic w-100">
    <div
      class="container d-flex flex-column flex-xl-row justify-content-between"
    >
      <div class="order-2 order-xl-1">
        <LandingPageTitle
          class="justify-content-center justify-content-xl-start"
          :title="title"
        />
        <div class="landing-counters">
          <div
            class="landing-counters--list d-flex flex-wrap justify-content-center"
          >
            <template v-for="item in list">
              <div :key="item.id" class="landing-counters--item">
                <Counter
                  :id="item.id"
                  :title="item.title"
                  :value="item.value"
                  :maxvalue="item.maxvalue"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
      <div
        class="statistic-media position-relative order-1 order-xl-2 align-self-center"
      >
        <div
          class="statistic-media--object position-absolute w-100 h-100"
          v-scrollmagic-element="{ triggerHook: 0.5 }"
        >
          <img src="~img/fish.png" alt="" />
        </div>
        <div class="statistic-media--layer-1 position-absolute h-100"></div>
        <div class="statistic-media--layer-2 position-absolute h-100"></div>
      </div>
    </div>
  </section>
</template>
