const bg = document.querySelector(".bg");
const walk = 20;
const friction = 0.8;

function swoosh(e) {
  const { offsetWidth: width, offsetHeight: height } = document.body;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = (-(x / (width / 2) - 1) * walk * friction).toFixed(2);
  const yWalk = (-(y / (height / 2) - 1) * walk * friction).toFixed(2);

  const tranformation = `translate(${xWalk}px, ${yWalk}px) scale(1.1)`;
  bg.style.transform = tranformation;
}

document.body.addEventListener("mousemove", swoosh);
