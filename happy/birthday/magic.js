const bg = document.querySelector(".bg");
const walk = 10;
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

const panels = Array.from(document.querySelectorAll(".panel"));

function swipe(e) {
  const openPanelIndex = panels.findIndex(panel =>
    panel.classList.contains("show")
  );
  console.log(openPanelIndex);
  switch (e.key) {
    case "ArrowLeft":
    case "ArrowUp":
      if (openPanelIndex === 0) return;
      panels.forEach((panel, i) => {
        panel.classList.remove("show");
        if (i === openPanelIndex - 1) panel.classList.add("show");
      });
      break;

    case "ArrowRight":
    case "ArrowDown":
      if (openPanelIndex === panels.length - 1) return;
      panels.forEach((panel, i) => {
        panel.classList.remove("show");
        if (i === openPanelIndex + 1) panel.classList.add("show");
      });
      break;

    default:
      return;
  }
}

document.addEventListener("keyup", swipe);
