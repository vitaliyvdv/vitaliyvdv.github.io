<script>
import Button from "vue/foundation/Button";
import LandingPageTitle from "./Title";
import ScrollmagicElement from "vue/directives/ScrollmagicElement";
import Preloader from "vue/foundation/Preloader";

export default {
  name: "LandingPageNews",
  components: {
    Button,
    Preloader,
    LandingPageTitle
  },
  props: ["title"],
  data() {
    return {
      news: [],
      resouce_url: "/dist/data/news.json",
      loading: false
    };
  },
  methods: {
    loadNews: function() {
      this.loading = true;

      axios
        .get(this.resouce_url)
        .then((response) => {
          var json = response.data;

          this.news = this.news.concat(json.data);
          this.resouce_url = json.next_page_url;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    masonryNews: function() {
      var masonryNews = Macy({
        container: this.$refs.masonry,
        columns: 2,
        trueOrder: true,
        waitForImages: true,
        margin: {
          x: 0,
          y: 0
        },
        breakAt: {
          767: {
            columns: 1
          }
        }
      });
    }
  },
  created: function() {
    this.loadNews();
  },
  updated: function() {
    this.masonryNews();
  },
  directives: {
    "scrollmagic-element": ScrollmagicElement
  }
};
</script>

<template>
  <section class="landing-item landing-news w-100 position-relative">
    <div class="container">
      <div
        class="landing-news--section"
        v-scrollmagic-element="{ triggerHook: 0.5 }"
      >
        <LandingPageTitle
          class="justify-content-center justify-content-xl-end"
          :title="title"
        />
        <div class="news">
          <div class="news-list" ref="masonry">
            <template v-for="item in news">
              <div class="news-item d-flex" :key="item.id">
                <section
                  class="news-item--card"
                  v-scrollmagic-element="{ triggerHook: 1 }"
                >
                  <a
                    class="news-item--media d-block position-relative"
                    :href="item.link"
                  >
                    <img
                      class="position-absolute w-100 h-100"
                      v-lazy="item.img"
                      :alt="item.title"
                    />
                  </a>
                  <time
                    class="news-item--date d-flex align-items-center"
                    datetime=""
                    >{{ item.date }}</time
                  >
                  <h3 class="news-item--title">
                    <a class="news-item--link" :href="item.link">{{
                      item.title
                    }}</a>
                  </h3>
                  <a class="news-item--read text-uppercase" :href="item.link"
                    >Детальніше</a
                  >
                </section>
              </div>
            </template>
          </div>

          <div class="news-actions d-flex justify-content-center">
            <template v-if="loading">
              <Preloader />
            </template>
            <template v-if="resouce_url && !loading">
              <Button
                class="btn-dark"
                title="Більше новин"
                arrow="true"
                @buttonClick="loadNews"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
