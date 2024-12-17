<template>
  <div id="main" class="min-h-screen w-screen bg-red-400 p-2" @mousedown.prevent>
    <div v-if="this.loading" class="position:absolute h-screen w-screen flex justify-center items-center">
    <h1>Loading...</h1>
  </div>
    <div id="card" class="bg-red-500 h-full w-full py-5" style="box-shadow: inset 0px 0px 10px 5px white;">
      <h1 class="mb-4 bg-rose-900/60 text-white text-5xl text-center">Christmas Scratchcard</h1>
      <div id="game" class="h-full w-11/12 mx-auto bg-red-500 grid grid-cols-4 grid-rows-3 gap-y-4 gap-x-1 mb-4">
        <ScratchBlock v-for="i in 12" :key="i" :contents="this.scratchBlockContents[i-1]" /> 
      </div>
      <h1 class="mb-4 bg-red-500 text-white text-2xl text-center bg-rose-900/60 w-1/4 mx-auto">Match 3 ⛄ to win</h1>
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
        { type: 'text', content: "A wine glass" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Santa" },
        { type: 'text', content: "A year's supply of Kopparberg gin" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Snowman" },
        { type: 'component', content: "Snowman" },
        { type: 'text', content: "Netball hospitality tickets" },
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

