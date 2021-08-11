<template>
  <a-entity
    :position="bData.px + ' ' + bData.py + ' ' + bData.pz"
    :rotation="bData.rx + ' ' + bData.ry + ' ' + bData.rz"
    scale="0.02 0.02 0.02"
    gltf-model="https://jeromegraves.com/assets/out.glb"
  ></a-entity>
</template>

<script>
export default {
  name: "Boid",
  data() {
    return {
      objBoid: {},
      boidSpeed: 0.5,
      position: new THREE.Vector3(),
    };
  },
  props: {
    bData: {
      index: String,
      px: Number,
      py: Number,
      pz: Number,
      rx: Number,
      ry: Number,
      rz: Number,
    },
  },
  methods: {
    getIndex() {
      this.objBoid = document.getElementById(this.bData.index).object3D;
    },
    moveBoid() {
      this.objBoid.translateX(this.boidSpeed);
    },
    distanceBetweenPoints(p1, p2) {
      var a = p2.x - p1.x;
      var b = p2.y - p1.y;
      var c = p2.z - p1.z;
      let ans = Math.sqrt(a * a + b * b + c * c);
      return ans;
    },
    getPos() {
      this.objBoid.getWorldPosition(this.position);
      return this.position;
    },
  },

  beforeMount() {},
  mounted() {
    this.getIndex();
    var count = 0;
    const zeros = { x: 0, y: 0, z: 0 };
    window.setInterval(() => {
      this.moveBoid();
      count = count > 150 ? 0 : count + 1;
      if (this.distanceBetweenPoints(zeros, this.getPos()) > 15) {
        if (count < 20) {
          this.objBoid.rotateY(
            (Math.PI + Math.floor(Math.random() / 5) - 0.25) / 20
          );
        }
      }
    }, 20 + Math.floor(Math.random() * 10));
  },
};
</script>

<style scoped>
</style>
