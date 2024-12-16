<template>
  <div id="main" class="min-h-screen w-screen" @mousedown.prevent>
    <div v-if="this.loading" class="position:absolute h-screen w-screen flex justify-center items-center">
    <h1>Loading...</h1>
  </div>
    <div id="card" class="bg-red-500 h-full w-full py-5" style="box-shadow: inset 0px 0px 10px 5px white;">
      <h1 class="mb-4 bg-red-500 text-white">Match 3 ⛄ to win</h1>
      <div id="game" class="h-full w-11/12 mx-auto bg-red-500 grid grid-cols-4 grid-rows-3 gap-y-4 gap-x-1">
        <ScratchBlock v-for="i in 12" :key="i" :contents="this.scratchBlockContents[i-1]" /> 
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
  data() {
    return {
      scratchBlockContents: [
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Tree" },
        { type: 'component', content: "Snowman" },
        { type: 'text', content: "Prize 1" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Santa" },
        { type: 'text', content: "Prize 2" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Snowman" },
        { type: 'text', content: "Prize 3" },
      ],
      loading: true,
    };
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
        this.loading = false;
      });
    },
  },
}
</script>

