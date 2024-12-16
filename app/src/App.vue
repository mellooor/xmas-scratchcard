<template>
  <div id="main" class="min-h-screen w-screen">
    <div id="card" class="bg-black h-full w-full">
      <h1 class="mb-4 bg-white">Match 3 ⛄ to win</h1>
      <div id="game" class="h-full w-full bg-black grid grid-cols-4 grid-rows-3 gap-y-4 gap-x-1">
        <ScratchBlock v-for="i in 12" :key="i" /> 
      </div>
    </div>
  </div>
</template>


<script>
import ScratchBlock from "./components/ScratchBlock.vue";

export default {
  components: {
    ScratchBlock,
  },
  mounted() {
    this.$nextTick(() => {
      screen.orientation.addEventListener('change', this.addScratchCovers);
      window.addEventListener('load', this.addScratchCovers);
    });
  },
  methods: {
    addScratchCovers() {
      const scratchBlocks = this.$el.querySelectorAll(".scratch-block");

      scratchBlocks.forEach((scratchBlock) => {
        const canvas = scratchBlock.querySelector("canvas");
        const canvasCtx = canvas.getContext("2d");

        canvas.width = scratchBlock.offsetWidth;
        canvas.height = scratchBlock.offsetHeight;

        const gradient = canvasCtx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#DFBD69");
        gradient.addColorStop(1, "#926F34");

        canvasCtx.fillStyle = gradient;
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      });
    },
  },
}
</script>

