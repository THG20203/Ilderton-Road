// QUERY SELECTING ELEMENTS
const zampaBackground = document.querySelector(".zampa-background");
const stadiumDrawing = document.querySelector(".stadium-background");
const mouseSlider = document.querySelector(".scrolling-mouse__slider");
const mouseBody = document.querySelector(".scrolling-mouse");
const postcodeButton = document.querySelector(".se-postcode__button");
const bermondseyDrawing = document.querySelector(".bermondsey-drawing");
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
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

window.addEventListener("scroll", () => {
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  /* Check if scroll position is beyond 100vh */
  if (scrollPosition > viewportHeight) {
    /* Reduce opacity of mouse slider */
    mouseSlider.style.opacity = "0";
    mouseBody.style.opacity = "0";
  } else {
    /* Restore opacity of mouse slider  (cause otherwise would 
      go to 0 and not change) */
    mouseSlider.style.opacity = "1";
    mouseBody.style.opacity = "1";
  }
});

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

/* VIDEO PLAYER FUNCTIONALITY */
/* Play and pause video */
const toggleVideoStatus = () => {
  if (video.paused) {
    /* if has been paused want to play */
    video.play();
  } else {
    /* if is playing we want to pause */
    video.pause();
  }
};

/* Update play/pause icon */
const updatePlayIcon = () => {
  if (video.paused) {
    /* if is paused want play icon */
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    /* if is playing want the pause icon */
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

/* Update the progress and timestamp */
const updateProgress = () => {
  /* remember progress is a range input so has a value - 
  currentTime / duration * 100 means percentage is being produced
  for the value bar. */
  progress.value = (video.currentTime / video.duration) * 100;
};

const setVideoProgress = () => {
  return true;
};

const stopVideo = () => {
  /* no stop method with API -> so set currentTime to 0, then pause */
  video.currentTime = 0;
  video.pause();
};

// VIDEO EVENT LISTENERS
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
/* timeupdate event is triggered repeatedly as the 
video plays. It is fired whenever the currentTime property of the video element changes. */
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);

/* PANELS FUNCTIONALITY */
/* doesn't matter what word you pass in, going to show whatever we want to use
for the iteration (the items retrieved for querySelectorAll) */
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    /* First have to remove active class on other items, by calling the
    removePanelActiveClass function with () */
    removePanelActiveClasses();
    /* to add a class on click? within click addEventListener, adding classList */
    panel.classList.add("panel-active");
  });
});

const removePanelActiveClasses = () => {
  /* loop through the panels node list (selected from querySelectorAll) */
  panels.forEach((panel) => {
    panel.classList.remove("panel-active");
  });
};
