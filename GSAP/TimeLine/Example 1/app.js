let tl = gsap.timeline();

tl.to(".box1", {
  opacity: 0,
  scale: 0,
  duration: 2,
  delay: 1,
})
  .to(".box2", {
    x: -200,
    duration: 2,
  })
  .to(".box3", {
    x: -200,
    borderRadius: 0,
    backgroundColor: "green",
    duration: 2,
  });
