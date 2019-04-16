export default Vue.directive("scrollmagic-element", {
  inserted: function(el, binding, vnode) {
    const controller = new ScrollMagic.Controller();
    let scene = new ScrollMagic.Scene({
      triggerElement: el,
      reverse: false,
      offset: 0,
      triggerHook: binding.value.triggerHook
    });
    scene.setClassToggle(el, "active").addTo(controller);
  }
});
