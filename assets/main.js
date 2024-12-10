const card = document.getElementById("game-1-1");
const scratchElement = document.getElementById("scratch-pad");
const canvas = scratchElement.getContext("2d");

scratchElement.width = card.offsetWidth;
scratchElement.height = card.offsetHeight;

const gradient = canvas.createLinearGradient(0, 0, scratchElement.width, scratchElement.height);
gradient.addColorStop(0, "#DFBD69");
gradient.addColorStop(1, "#926F34");

canvas.fillStyle = gradient;
canvas.fillRect(0, 0, scratchElement.width, scratchElement.height);

scratchElement.addEventListener("mousedown", (event) => {
  const onMouseMove = (event) => {
    scratch(event);
  }

  const onMouseUp = () => {    
    scratchElement.removeEventListener('mousemove', onMouseMove);
    scratchElement.removeEventListener('mouseup', onMouseUp);
};

  scratchElement.addEventListener("mousemove", onMouseMove);
  scratchElement.addEventListener('mouseup', onMouseUp);
});

scratchElement.addEventListener("touchstart", (event) => {
  e.preventDefault();
  
  const onTouchMove = (event) => {
    scratch(event.touches[0]);
  }

  const onTouchEnd = () => {    
    scratchElement.removeEventListener('touchmove', onTouchMove);
    scratchElement.removeEventListener('touchend', onTouchEnd);
};

  scratchElement.addEventListener("touchmove", onTouchMove);
  scratchElement.addEventListener('touchend', onTouchEnd);
});

function scratch(event) {
  const rect = scratchElement.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  canvas.globalCompositeOperation = "destination-out";
  canvas.beginPath();
  canvas.arc(x, y, 40, 0, Math.PI * 2, false);
  canvas.fill();
}