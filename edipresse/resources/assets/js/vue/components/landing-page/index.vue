<script>
import LandingPageStart from "./Start";
import LandingPageStatistic from "./Statistic";
import LandingPageMission from "./Mission";
import LandingPageCase from "./Case";
import LandingPageNews from "./News";
import LandingPageFoundation from "./Foundation";

export default {
  name: "LandingPage",
  data() {
    return {
      landing: [],
      start: [],
      statistics: [],
      mission: [],
      cases: [],
      foundation: []
    };
  },
  created: function() {
    axios
      .get("/dist/data/landing.json")
      .then((response) => {
        var json = response.data;
        this.start = json.landingStart;
        this.statistics = json.landingStatistic;
        this.mission = json.landingMission;
        this.cases = json.landingCase;
        this.foundation = json.landingFoundation;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted: function() {
    this.$store.dispatch("moduleHeader/getDefaultTheme");
  },
  components: {
    LandingPageStart,
    LandingPageStatistic,
    LandingPageMission,
    LandingPageCase,
    LandingPageNews,
    LandingPageFoundation
  }
};
</script>

<template>
  <div class="landing">
    <LandingPageStart
      :img="start.img"
      :description="start.descr"
      data-theme="transparent"
      v-landing-scroll
    />
    <LandingPageStatistic
      :title="statistics.title"
      :list="statistics.counters"
      data-theme="blue"
      v-landing-scroll
    />
    <LandingPageMission
      :title="mission.title"
      :list="mission.list"
      data-theme="white"
      v-landing-scroll
    />
    <LandingPageCase
      :title="cases.title"
      :list="cases.list"
      data-theme="blue"
      v-landing-scroll
    />
    <LandingPageNews title="новини" data-theme="white" v-landing-scroll />
    <LandingPageFoundation
      :title="foundation.title"
      :url="foundation.url"
      :description="foundation.descr"
      :img="foundation.img"
      data-theme="blue"
      v-landing-scroll
    />
  </div>
</template>
