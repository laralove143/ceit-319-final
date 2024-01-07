function setHeight() {
  let gridContainer = document.getElementById("gridContainer");
  gridContainer.style.height = `calc(${window.innerHeight}px - 5vh)`;
}

setHeight();
addEventListener("resize", setHeight);
