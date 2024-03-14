// ELEMENTS
const zampaBackground = document.querySelector(".zampa-background");
const stadiumDrawing = document.querySelector(".stadium-background");
const ildertonTitle = document.querySelector(".ilderton-title");
const mouseSlider = document.querySelector(".scrolling-mouse__slider");

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
    if (screenWidth >= 400) {
      /* if scale is greater or equal  than 1.4 opacity 0 if not reached that yet -> 1 */
      element.style.opacity = scale >= 1.4 ? 0 : 1;
    } else {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        /* maxScroll is calculating the maximum scroll position possible before reaching 
        the bottom of the document. It does this by subtracting the height of the viewport 
        from the total height of the document. */
        const maxScroll = document.body.clientHeight - window.innerHeight;
        /* scrollPosition / maxScroll: This calculates the proportion of how far down the 
        user has scrolled relative to the total scrollable distance. It's essentially 
        normalizing the scroll position value to a range between 0 and 1. */
        const opacity = 1 - scrollPosition / maxScroll;
        element.style.opacity = opacity;
      });
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
