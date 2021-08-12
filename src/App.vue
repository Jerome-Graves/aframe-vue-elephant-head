<template>
  <div id="app">
    <!--
  -->

    <a-scene
      renderer="antialias: false;
                   colorManagement: false;
                   sortObjects: false;
                   physicallyCorrectLights: false;"
    >
      <a-entity turn_head="">
        <a-entity
          position="0 -13 0"
          rotation="0 0 0"
          scale="0.5 0.5 0.5"
          gltf-model="https://jeromegraves.com/assets/elephant.glb"
        >
        </a-entity>
      </a-entity>
      <a-camera
        position="0 0 50"
        fov="40"
        near="1"
        wasd-controls-enabled="false"
        look-controls="false"
      >
      </a-camera>
      <a-sky
        position="0 0 0"
        color="#40e34d"
        animation__color="property: components.material.material.color;  
  type: color;
to: #14171A;
dur: 5000;
dir: alternate;
loop: true;
elasticity: 10000;
      "
      ></a-sky>
    </a-scene>
  </div>
</template>

<script>
import aframe from "aframe";

var mouseX = 0;
var mouseY = 0;

export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods: {},
  beforeMount() {},
};

AFRAME.registerComponent("turn_head", {
  schema: {
    // target: { type: "selector" },
    // speed: { type: "number" },
  },
  init: function () {},

  tick: function (time, timeDelta) {
    // mouseX = mouseX - 50;
    this.el.object3D.rotation.x = -mouseY;
    this.el.object3D.rotation.y = -mouseX;
  },
});

window.addEventListener("mousemove", (e) => {
  mouseX =
    (((window.innerWidth - e.clientX) / window.innerWidth - 0.5) * Math.PI) / 2;
  mouseY =
    (((window.innerHeight - e.clientY) / window.innerHeight - 0.5) * Math.PI) /
    2;
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
