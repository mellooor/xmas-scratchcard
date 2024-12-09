import 'scratchcard-js';

const scContainer = document.getElementById('game-1-1');
const sc = new ScratchCard(scContainer, {
    scratchType: SCRATCH_TYPE.LINE,
    containerWidth: scContainer.offsetWidth,
    containerHeight: 300,
    imageForwardSrc: '/assets/images/scratchcard.jpg',
    imageBackgroundSrc: '/assets/images/result.png',
    htmlBackground: '<p class="text-6xl">⛄<p>',
    clearZoneRadius: 20,
    nPoints: 0,
    pointSize: 0,
    enabledPercentUpdate: true,
    percentToFinish: 50, // enabledPercentUpdate must to be true
    callback: function () {}
});

sc.init().then(() => {
  sc.canvas.style.position = 'absolute';
  sc.canvas.style.top = 0;
  sc.canvas.style.left = 0;
  sc.canvas.style.width = '100%';
  sc.canvas.style.height = '100%';
  document.getElementById('game-1-1').appendChild(sc.canvas);
}).catch(error => {
  console.error(error);
});