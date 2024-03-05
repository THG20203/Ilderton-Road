let zampaBackground = document.querySelector(".zampa-background");
let stadiumDrawing = document.querySelector(".stadium-background");

window.addEventListener("scroll", () => {
  const zampaScrollPosition = window.scrollY;
  const zampaScale = 1 + zampaScrollPosition / 200;
  zampaBackground.style.transform = `scale3d(${zampaScale}, ${zampaScale}, 1)`;
});

window.addEventListener("scroll", () => {
  const stadiumScrollPosition = window.scrollY;
  const scale = 1 + stadiumScrollPosition / 1000;
  stadiumDrawing.style.transform = `scale3d(${scale}, ${scale}, 1)`;

  const backgroundSizePercentage = 50 + stadiumScrollPosition / 5; // Adjust the rate of increase as needed
  stadiumDrawing.style.backgroundSize = `${backgroundSizePercentage}%`;
  stadiumDrawing.style.height = `${80 + stadiumScrollPosition / 10}vh`; // Adjust the rate of increase as needed
});
