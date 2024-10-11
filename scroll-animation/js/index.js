const scrollElements = document.querySelectorAll(".js-scroll");

function isElementInView(elem) {
  const distanceFromTop = elem.getBoundingClientRect().top;
  return distanceFromTop < window.innerHeight / 1.25;
}

function isElementOutOfView(elem) {
  const distanceFromTop = elem.getBoundingClientRect().top;
  return distanceFromTop > window.innerHeight;
}

window.addEventListener("scroll", () => {
  scrollElements.forEach((elem) => {
    //console.log("Is in view", isElementInView(elem));

    if (isElementInView(elem)) {
      anime({
        targets: elem,
        opacity: 1,
        duration: 400,
        easing: "easeInQuad",
      });
    } else if (isElementOutOfView(elem)) {
      anime({
        targets: elem,
        opacity: 0,
        duration: 400,
        easing: "easeInQuad",
      });
    }
  });

  // const firstElem = scrollElements[0];
  // const distanceFromTop = firstElem.getBoundingClientRect().top;
  // console.log("distanceFromTop:", distanceFromTop);
  // console.log("Current height", window.innerHeight);
});
