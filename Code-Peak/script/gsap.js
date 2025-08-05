gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".contentability",
    smoot: 1.5,
    effects: true,
  });

  gsap.fromTo(
    "#Hero",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: "#Hero",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );
  let itemsL = gsap.utils.toArray("#Courses");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { y: -150, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: "-350",
          end: "0",
          scrub: true,
        },
      }
    );
  });
  let itemsR = gsap.utils.toArray("#Comment,  #Faq");

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { y: 150, opacity: 0 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: "-950",
          end: "-0",
          scrub: true,
        },
      }
    );
  });
}
