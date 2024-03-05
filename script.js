let zampaBackground = document.querySelector(".zampa-background");
let stadiumDrawing = document.querySelector(".stadium-background");

window.addEventListener("scroll", () => {
  const zampaScrollPosition = window.scrollY;
  const zampaScale = 1 + zampaScrollPosition / 800;
  zampaBackground.style.transform = `scale3d(${zampaScale}, ${zampaScale}, 1)`;

  // Check if the scale of zampaBackground reaches 1.5
  if (zampaScale >= 1.3) {
    // Set opacity to 0 for both zampaBackground and stadiumDrawing with transition
    zampaBackground.style.transition = "opacity 0.5s ease";
    stadiumDrawing.style.transition = "opacity 0.5s ease";
    zampaBackground.style.opacity = 0;
    stadiumDrawing.style.opacity = 0;
  } else {
    // Reset opacity if zampaScale is less than 1.5
    zampaBackground.style.transition = "opacity 0.5s ease";
    stadiumDrawing.style.transition = "opacity 0.5s ease";
    zampaBackground.style.opacity = 1;
    stadiumDrawing.style.opacity = 1;
  }

  const stadiumScrollPosition = window.scrollY;
  const scale = 1 + stadiumScrollPosition / 1000;
  stadiumDrawing.style.transform = `scale3d(${scale}, ${scale}, 1)`;
});
