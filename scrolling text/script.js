// gsap.registerPlugin(ScrollTrigger);

// document.body.style.overflow = "auto";

// const backTextWrapper = document?.querySelectorAll(".background-text");

// backTextWrapper.forEach((section) => {
//   const textLines = section?.querySelectorAll(".background-text__item");

//   textLines.forEach(function (line, index) {
//     const [x, xEnd] =
//       index % 2
//         ? [window.innerWidth, (line.scrollWidth - section.offsetWidth) * -1]
//         : [line.scrollWidth * -1, 0];

//     gsap.fromTo(
//       line,
//       { x },
//       {
//         x: xEnd,
//         scrollTrigger: {
//           trigger: section,
//           scrub: 0.5,
//           start: "top 75%",
//           end: "top top"
//           // markers: true
//         }
//       }
//     );
//   });
// });



gsap.registerPlugin(ScrollTrigger);

const backTextWrapper = document.querySelectorAll(".background-text");

backTextWrapper.forEach((section) => {
  const textLines = section.querySelectorAll(".background-text__item");

  textLines.forEach(function (line, index) {
    const [x, xEnd] =
      index % 2
        ? [window.innerWidth, (line.scrollWidth - section.offsetWidth) * -1]
        : [line.scrollWidth * -1, 0];

    gsap.fromTo(
      line,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          start: "top 75%",
          end: "top top",
        //   markers: true
        }
      }
    );
  });
});

















// chatgtp code

// document.addEventListener("DOMContentLoaded", function() {
//     gsap.registerPlugin(ScrollTrigger);

//     const backTextWrapper = document.querySelectorAll(".background-text");

//     backTextWrapper.forEach((section) => {
//         const textLines = section.querySelectorAll(".background-text__item");

//         textLines.forEach(function (line, index) {
//             const [x, xEnd] =
//                 index % 2
//                     ? [window.innerWidth, (line.scrollWidth - section.offsetWidth) * -1]
//                     : [line.scrollWidth * -1, 0];

//             gsap.fromTo(
//                 line,
//                 { x },
//                 {
//                     x: xEnd,
//                     scrollTrigger: {
//                         trigger: section,
//                         scrub: 0.5,
//                         start: "top 75%",
//                         end: "top top",
//                         // markers: true
//                     }
//                 }
//             );
//         });
//     });
// });
