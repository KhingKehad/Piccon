// FOR SELECTION
const navOpen = document.querySelector(".nav__container-open");
const navClose = document.querySelector(".nav__container-close3-right");
const unOrdered = document.querySelector(".nav__container-list-unordered");
const list = document.querySelector(".nav__container-list");
const upload = document.querySelector(".header__container-upload--button");
const main = document.querySelector(".main");

const waitlist = document.querySelector('.waitlist');
const openWaitlist = document.querySelector(".button-type1");
const closeWaitlist = document.querySelector(".waitlist__container---close");
const navButtons = document.querySelectorAll('.link-close')


navOpen.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("NAv open");
    unOrdered.classList.add("nav--active");

  //   unOrdered.style.transform = "translateX(0%)";
  navClose.style.display = "block";
  // unOrdered.style.display = "flex";
});

navClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("NAv close");
    unOrdered.classList.remove("nav--active");

  // unOrdered.style.transform = "translateX(-100%)";
  // // // unOrdered.style.display = "none";
  navClose.style.display = "none";
});
// navOpen.addEventListener("click", function (e) {
//   e.preventDefault();
//   navList.classList.add("nav--active");
//   console.log("show nav");
//   if (navList.classList.contains("nav--active")) {
//     body.style.overflow = "hidden";
//   } else {
//     body.style.overflow = "visible";
//   }
// });

// const navClose = document.querySelector(".nav-close");
// const navItem = document.querySelectorAll(".item");
// navClose.addEventListener("click", function (e) {
//   // navList.classList.add('nav--showslide');
//   e.preventDefault();
//   navList.style.transformX = "translateX(100%)";
//   navList.style.transition = "all 0.5s";
//   navList.classList.remove("nav--active");
//   body.style.overflow = "visible";
// });
upload.addEventListener("click", function (e) {
    e.preventDefault();

    var input = document.createElement("input");
    input.type = "file";
    input.click();
})

openWaitlist.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("open waitlist");
  console.log(waitlist);
  waitlist.style.display = "block";
  main.classList.add("backdrop");
  navClose.style.display = "none";
});

closeWaitlist.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("open waitlist");
  console.log(waitlist);
  waitlist.style.display = "none";
  main.classList.remove("backdrop");
  navClose.style.display = "";
  
});

navButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    unOrdered.classList.remove('nav--active')
    navClose.style.display = 'none';
  });
})

window.addEventListener('resize', function () {
  // unOrdered.style.transform = "translateX(0%)";
  // navClose.style.display = "block";  
})


