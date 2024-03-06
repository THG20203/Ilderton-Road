let zampaBackground = document.querySelector(".zampa-background");
let stadiumDrawing = document.querySelector(".stadium-background");

//PARALLAX CODE
window.addEventListener("scroll", () => {
  //PARALLAX VARIABLES
  const zampaScrollPosition = window.scrollY;
  const stadiumScrollPosition = window.scrollY;

  // PARALLAX FUNCTIONS
  const calculateScale = (scrollPosition, divisionFactor) => {
    /* 1 + to make sure it doesn't go to 0 or negative and flip it */
    /* divisianFactor is arbitary number for scaling, lower number dividing by faster scaling */
    return 1 + scrollPosition / divisionFactor;
  };

  /* once got scale from calculateScale can use it as scale second argument when calling function */
  const applyTransform = (element, scale) => {
    element.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  };

  const applyOpacity = (element, scale) => {
    element.style.transition = "opacity 0.5s ease";
    /* if scale is greater or equal  than 1.3 opacity 0 if not reached that yet -> 1 */
    element.style.opacity = scale >= 1.3 ? 0 : 1;
  };

  const zampaScale = calculateScale(zampaScrollPosition, 800);
  const stadiumScale = calculateScale(stadiumScrollPosition, 1000);
  applyTransform(zampaBackground, zampaScale);
  applyOpacity(zampaBackground, zampaScale);
  applyTransform(stadiumDrawing, stadiumScale);
  applyOpacity(stadiumDrawing, stadiumScale);
});
