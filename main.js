function setHeight() {
  document.body.style.height = `${window.innerHeight}px`;
}

setHeight();
addEventListener("resize", setHeight);
