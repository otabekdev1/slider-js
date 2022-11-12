const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let curSlide = 0;

const nextSlide = document.querySelector(".btn-next");

const prevSlide = document.querySelector(".btn-prev");

setInterval(() => {
  let maxSlide = slides.length - 1;

  nextSlide.addEventListener("click", function () {
    if (curSlide == maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
  });

  prevSlide.addEventListener("click", function () {
    if (curSlide == 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
  });
}, 3000);
