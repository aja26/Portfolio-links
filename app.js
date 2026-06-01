const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

const rail = document.querySelector('.rail__inner');

locomotiveScroll.on('scroll', ({ scroll }) => {
  rail.style.transform = `translate3d(${-scroll.y * 0.4}px, 0, 0)`;
  console.log(scroll.y);
});