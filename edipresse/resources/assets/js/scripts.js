import "helpers/fontawesome";
import "helpers/mobile-detector";
import "helpers/no-transition";
import "dev";

import store from "vue/stores";
import Header from "vue/components/app/header";
import Footer from "vue/components/app/footer";
import LandingPage from "vue/components/landing-page";
import Counter from "js/vue/foundation/Counter";
import ButtonLink from "js/vue/foundation/ButtonLink";
import Navigation from "js/vue/components/app/navigation";
import ScrollmagicLanding from "js/vue/directives/ScrollmagicLanding";

import TopBanner from "js/vue/components/TopBanner";
import PageHeader from "js/vue/components/PageHeader";

//import ScrollmagicLanding from "js/vue/directives/ScrollmagicLanding";

// unregister service worker
/*navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});*/

Vue.config.devtools = true;
Vue.config.performance = true;

Vue.use(VueLazyload);

if (document.body.contains(document.getElementById("header"))) {
  var header = new Vue({
    el: "#header",
    store,
    components: {
      Header
    },
    template: "<Header />"
  });
}

if (document.body.contains(document.getElementById("footer"))) {
  var footer = new Vue({
    el: "#footer",
    store,
    components: {
      Footer
    },
    template: "<Footer />"
  });
}

if (document.body.contains(document.getElementById("navigation"))) {
  var navigation = new Vue({
    el: "#navigation",
    store,
    components: {
      navigation: Navigation
    },
    computed: {
      topmenuClass: function() {
        return this.$store.getters["moduleNavigation/navigationClass"];
      }
    },
    methods: {
      hideTopmenu: function() {
        this.$store.dispatch("moduleNavigation/navigationState"); // module name/action
        return this.$store.getters["moduleNavigation/noScroll"];
      }
    },
    directives: {
      "submenu-toggle": {
        inserted: function(el, binding, vnode) {
          el.addEventListener("click", function(e) {
            const siblings = el.nextElementSibling;

            if (siblings && window.matchMedia("(max-width: 991px)").matches) {
              e.preventDefault();
              el.classList.toggle("active");
              if (el.classList.contains("active")) {
                Velocity(siblings, "slideDown", {
                  duration: 400,
                  easing: "ease"
                });
              } else {
                Velocity(siblings, "slideUp", {
                  duration: 400,
                  easing: "ease"
                });
              }
            }
          });
        }
      }
    }
  });
}

if (document.body.contains(document.getElementById("landing-page"))) {
  var landingPage = new Vue({
    el: "#landing-page",
    store,
    components: {
      LandingPage
    },
    template: "<LandingPage />"
  });
}

if (document.body.contains(document.getElementById("content"))) {
  var content = new Vue({
    el: "#content",
    store,
    components: {
      "button-link": ButtonLink,
      "top-banner": TopBanner,
      "page-header": PageHeader
    },
    mounted: function() {
      this.$store.dispatch("moduleHeader/getDefaultTheme");
    }
  });
}

if (document.body.contains(document.getElementById("keypoints"))) {
  var content = new Vue({
    el: "#keypoints",
    store,
    components: {
      counter: Counter,
      "button-link": ButtonLink
    }
  });
}
