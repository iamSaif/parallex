var sports = document.querySelector(".sports");
var wear = document.querySelector(".wear");
var img = document.querySelector(".image-container");
var head = document.querySelector(".heads");

function parallex(element, speed, direction) {
  switch (direction) {
    case "up":
      element.style.transform = `translateX(-${
        window.scrollY * (speed / 100)
      }px)`;
      break;
    case "down":
      element.style.transform = `translateX(${
        window.scrollY * (speed / 100)
      }px)`;
      break;
    default:
      break;
  }
}

window.addEventListener("scroll", function () {
  parallex(sports, 20, "up");
  parallex(wear, 40, "down");
  fadein(img, 75);
  fadein(head,100);
});
function fadein(element, position) {
  var scrheight = window.innerHeight;
  var scrposcal = scrheight * (position / 100);
  var elefromtop = element.getBoundingClientRect().top;
  if (elefromtop < scrposcal) {
    element.classList.add("fadein");
  } else {
    element.classList.remove("fadein");
  }
}
