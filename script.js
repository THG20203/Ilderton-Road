let zampaBackground = document.querySelector(".zampa-background");
let stadiumDrawing = document.querySelector(".stadium-background");
let ildertonRoad = document.querySelector(".ilderton-road");

window.addEventListener("scroll", () => {
  const zampaScrollPosition = window.scrollY;
  const zampaScale = 1 + zampaScrollPosition / 600;
  zampaBackground.style.transform = `scale3d(${zampaScale}, ${zampaScale}, 1)`;

  const stadiumScrollPosition = window.scrollY;
  const scale = 1 + stadiumScrollPosition / 1000;
  stadiumDrawing.style.transform = `scale3d(${scale}, ${scale}, 1)`;
});
