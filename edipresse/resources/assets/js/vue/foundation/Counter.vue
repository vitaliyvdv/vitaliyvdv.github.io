<script>
export default {
  name: "Counter",
  props: ["title", "value", "maxvalue", "id", "theme"],
  directives: {
    "circle-counter": {
      inserted: function(el, binding, vnode) {
        const controllerCounter = new ScrollMagic.Controller();
        let sceneCounter = new ScrollMagic.Scene({
          triggerElement: el,
          reverse: false,
          offset: 0,
          triggerHook: 1
        });

        function Theme() {
          if (binding.value.theme == "blue") {
            return ["#000", "#000"];
          } else {
            return ["#8cbdd1", "#b4d4e1"];
          }
        }

        sceneCounter
          .on("enter", function(event) {
            Circles.create({
              id: el.id,
              radius: 54,
              value: el.dataset.value,
              maxValue: el.dataset.maxvalue,
              width: 4,
              text: function(value) {
                return value + "+";
              },
              //colors: ["#8cbdd1", "#b4d4e1"],
              colors: Theme(),
              duration: 1500,
              wrpClass: "circles-wrp",
              textClass: "circles-text",
              styleWrapper: true,
              styleText: true
            });
          })
          .addTo(controllerCounter);
      }
    }
  }
};
</script>

<template>
  <div class="counter">
    <div
      class="counter-circle"
      :id="'counter-' + id"
      :data-value="value"
      :data-maxvalue="maxvalue"
      v-circle-counter="{ theme: theme }"
    ></div>
    <div class="counter-title" v-html="title"></div>
  </div>
</template>
