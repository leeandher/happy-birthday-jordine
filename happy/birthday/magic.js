//Background Parallax

const bg = document.querySelector(".bg");
const sl = document.querySelector(".spotlight");
const walk = 25;
const friction = 0.8;

function swoosh(e) {
  const { offsetWidth: width, offsetHeight: height } = document.body;
  let { screenX: x, screenY: y } = e;

  const xWalk = (-(x / (width / 2) - 1) * walk * friction).toFixed(2);
  const yWalk = (-(y / (height / 2) - 1) * walk * friction).toFixed(2);

  const tranformation = `translate(${xWalk}px, ${yWalk}px) scale(1.1)`;
  const spotlight = `${-xWalk * 2}px ${-yWalk * 2}px DEEPPINK`;
  bg.style.transform = tranformation;
  sl.style.textShadow = spotlight;
}

document.body.addEventListener("mousemove", swoosh);

//Panel Control

const panels = Array.from(document.querySelectorAll(".panel"));

function prevPanel() {
  const openPanelIndex = panels.findIndex(panel =>
    panel.classList.contains("show")
  );
  if (openPanelIndex === 0) return;
  panels.forEach((panel, i) => {
    panel.classList.remove("show");
    if (i === openPanelIndex - 1) panel.classList.add("show");
  });
}

function nextPanel() {
  const openPanelIndex = panels.findIndex(panel =>
    panel.classList.contains("show")
  );
  if (openPanelIndex === panels.length - 1) return;
  panels.forEach((panel, i) => {
    panel.classList.remove("show");
    if (i === openPanelIndex + 1) panel.classList.add("show");
  });
}

function swipe(e) {
  const openPanelIndex = panels.findIndex(panel =>
    panel.classList.contains("show")
  );
  switch (e.key) {
    case "ArrowLeft":
    case "ArrowUp":
    case "a":
      return prevPanel();
    case "ArrowRight":
    case "ArrowDown":
    case "d":
      return nextPanel();
    default:
      return;
  }
}

function flick(e) {
  const { offsetWidth: width } = this;
  console.log(e.screenX > width / 2);
  console.log({ width: width / 2 });
  if (e.screenX > width / 2) nextPanel();
  else prevPanel();
}

document.body.addEventListener("keyup", swipe);
document.body.addEventListener("click", flick);
