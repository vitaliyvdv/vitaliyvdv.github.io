export default Vue.directive("landing-scroll", {
  inserted: function(el, binding, vnode) {
    const controllerLanding = new ScrollMagic.Controller();

    let sceneLanding = new ScrollMagic.Scene({
      triggerElement: el,
      reverse: true,
      offset: 0,
      triggerHook: 0
    });

    function setHeaderTheme(el) {
      switch (el.dataset.theme) {
        case "transparent":
          vnode.context.$store.dispatch("moduleHeader/getTransparentTheme");
          break;
        case "white":
          vnode.context.$store.dispatch("moduleHeader/getWhiteTheme");
          break;
        case "blue":
          vnode.context.$store.dispatch("moduleHeader/getBlueTheme");
          break;
        default:
          vnode.context.$store.dispatch("moduleHeader/getDefaultTheme");
          break;
      }
    }

    sceneLanding
      .on("start", function(event) {
        setHeaderTheme(el);
      })
      .addTo(controllerLanding);

    sceneLanding
      .on("end", function(event) {
        setHeaderTheme(el);
      })
      .addTo(controllerLanding);

    let durationValueCache;
    function getLandingDuration() {
      return durationValueCache;
    }

    function updateLandingDuration(e) {
      durationValueCache = el.offsetHeight;
    }

    updateLandingDuration();

    window.addEventListener("resize", function() {
      updateLandingDuration();
    });

    window.addEventListener("scroll", function() {
      updateLandingDuration();
    });

    sceneLanding.duration(getLandingDuration);
  }
});
