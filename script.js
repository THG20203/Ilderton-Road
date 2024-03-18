// QUERY SELECTING ELEMENTS
const zampaBackground = document.querySelector(".zampa-background");
const stadiumDrawing = document.querySelector(".stadium-background");
const ildertonTitle = document.querySelector(".ilderton-title");
const mouseSlider = document.querySelector(".scrolling-mouse__slider");
const postcodeButton = document.querySelector(".se-postcode__button");
const bermondseyDrawing = document.querySelector(".bermondsey-drawing");
const panels = document.querySelectorAll(".panel");

/* PARALLAX CODE */
window.addEventListener("scroll", () => {
  //PARALLAX VARIABLES
  const zampaScrollPosition = window.scrollY;
  const stadiumScrollPosition = window.scrollY;

  // PARALLAX FUNCTIONS
  const calculateScale = (scrollPosition, divisionFactor) => {
    /* 1 + to make sure it doesn't go to 0 or negative and flip it */
    /* divisianFactor is arbitary number for scaling, lower number dividing by = faster scaling */
    return 1 + scrollPosition / divisionFactor;
  };

  /* once got scale from calculateScale can use it as scale second argument when calling function */
  const applyTransform = (element, scale) => {
    element.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  };

  const applyOpacity = (element, scale) => {
    const screenWidth = window.innerWidth;
    element.style.transition = "opacity 0.5s ease";
    if (screenWidth > 300) {
      /* if scale is greater than 1.4 opacity 0 if not reached that yet -> 1 */
      element.style.opacity = scale >= 1.4 ? 0 : 1;
    } else {
      element.style.opacity = scale > 1 ? 0 : 1;
    }
  };

  const zampaScale = calculateScale(zampaScrollPosition, 600);
  const stadiumScale = calculateScale(stadiumScrollPosition, 1000);
  applyTransform(zampaBackground, zampaScale);
  applyOpacity(zampaBackground, zampaScale);
  applyTransform(stadiumDrawing, stadiumScale);
  applyOpacity(stadiumDrawing, stadiumScale);
});

/* PARALLAX TITLE FADE IN ANIMATION */
window.addEventListener("load", () => {
  ildertonTitle.style.transition = "opacity 2s ease-in";
  /* no need for conditional, load event has either happened or not */
  ildertonTitle.style.opacity = 1;
});

/* MOUSE SCROLL ANIMATION */
const mouseMoveUpDown = () => {
  /* parseFloat converts string to a floating point number */
  /* Why? getComputedStyle.top returns top CSS as a string. */
  const mouseScrollCurrentPosition = parseFloat(
    getComputedStyle(mouseSlider).top
  );
  /* if current position top: -10px change to 10px then back if false */
  const mouseScrollNewPosition = mouseScrollCurrentPosition === -10 ? 10 : -10;
  mouseSlider.style.top = `${mouseScrollNewPosition}px`;
};

/* call moveUpDown function 400 miliseconds */
setInterval(mouseMoveUpDown, 400);

/* DRAWING CLICK THROUGH */
let currentPostCodeIndex = 1;

postcodeButton.addEventListener("click", () => {
  if (currentPostCodeIndex <= 4) {
    bermondseyDrawing.src = `./img/bermondsey-${currentPostCodeIndex}.png`;
    currentPostCodeIndex++;
  } else {
    currentPostCodeIndex = 1;
    bermondseyDrawing.src = `./img/bermondsey-${currentPostCodeIndex}.png`;
  }
});

/* PANELS FUNCTIONALITY */
/* doesn't matter what word you pass in, going to show whatever we want to use
for the iteration (the items retrieved for querySelectorAll) */
panels.forEach((panel) => {
  console.log(panel);
});
