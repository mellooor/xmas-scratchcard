<template>
  <div class="scratch-block bg-white position: relative flex justify-center items-center">
    <canvas
      class="position-absolute top-0 start-0"
      @mousedown="mouseScratch"
      @touchstart.prevent="touchScratch"
    ></canvas>
  </div>
</template>

<script>
export default {
  methods: {
    mouseScratch(event) {
      const onMouseMove = (event) => {
          this.scratch(event);
        }

        const onMouseUp = () => {    
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
      };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    },
    touchScratch(event) {
      const onTouchMove = (event) => {
          this.scratch(event.touches[0]);
        }

        const onTouchEnd = () => {    
          window.removeEventListener('touchmove', onTouchMove);
          window.removeEventListener('touchend', onTouchEnd);
      };

        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
    },
    scratch(event) {
      const scratchCanvas = this.$el.querySelector("canvas");
      const canvasCtx = scratchCanvas.getContext("2d");

      const rect = scratchCanvas.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      canvasCtx.globalCompositeOperation = "destination-out";
      canvasCtx.beginPath();
      canvasCtx.arc(x, y, 18, 0, Math.PI * 2, false);
      canvasCtx.fill();
    }
  },
};

</script>