let zampaBackground = document.querySelector(".zampa-background");
let stadiumDrawing = document.querySelector(".stadium-background");

window.addEventListener("scroll", () => {
  const zampaScrollPosition = window.scrollY;
  const zampaScale = 1 + zampaScrollPosition / 1000;
  zampaBackground.style.transform = `scale3d(${zampaScale}, ${zampaScale}, 1)`;
});

window.addEventListener("scroll", () => {
  const stadiumScrollPosition = window.scrollY;
  const scale = 1 + stadiumScrollPosition / 900;
  stadiumDrawing.style.transform = `scale3d(${scale}, ${scale}, 1)`;
});
