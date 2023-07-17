function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

gsap.to("#page>video", {
  scrollTrigger: {
    trigger: `#page>video`,
    start: `10% top`,
    end: `bottom top`,
    scroller: `#main`,
  },
  onStart: () => {
    document.querySelector("#page>video").play();
  },
});
gsap.to("#page", {
  scrollTrigger: {
    trigger: `#page`,
    start: `top top`,
    end: `bottom top`,
    scroller: `#main`,
    pin: true,
  },
});
gsap.to("#vision_text", {
  scrollTrigger: {
    trigger: `#vision_text`,
    start: `5% top`,
    end: `bottom top`,
    scroller: `#main`,
  },
  opacity: 0,
});
// page1
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    scroller: `#main`,
    pin: true,
    scrub: 3,
  },
});

tl1.to("#page1>h1", {
  top: `-50%`,
  opacity: 0,
  scrub: 3,
});

// page2
const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: `#page2`,
      start: `top top`,
      end: `bottom top`,
      scroller: `#main`,
      pin: true,
      scrub: 3,
    },
  });
  
  tl2.to("#page2>h1", {
    top: `-50%`,
    opacity: 0,
    scrub:3,
  });


// page3

const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: `#page3`,
      start: `top top`,
      end: `bottom top`,
      scroller: `#main`,
      pin: true,
      scrub: 3,
    },
  });
  
  tl3.to("#page3>h1", {
    top: `-50%`,
    opacity: 0,
    scrub:3
  });

  // page4
const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: `#page4`,
      start: `top top`,
      end: `bottom top`,
      scroller: `#main`,
      pin: true,
      scrub: 10,
    },
  });
  
  tl4.to("#page4>h1", {
    top: `-20%`,
    opacity: 0,
    scrub:3
  });
  tl4.to("#page4>h3", {
    marker: true,
    top: `-35%`,
    opacity:1,
    scrub: 7,
  });

  // page6

  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: `#page6`,
      start: `top top`,
      end: `bottom top`,
      scroller: `#main`,
      pin: true,
      scrub:1
    },
  });
  tl6.to("#page6-main", {
    top: `-50%`,
    scrub:0.5

  })
  .to('#page6>video',{
    width: '92vw'
  })


  // page 8
  const tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: `#page8`,
      start: `top top`,
      end: `bottom top`,
      scroller: `#main`,
      pin: true,
      scrub:1
    },
  });
  tl8.to("#page8-main", {
    top: `-50%`,
    scrub:0.5

  })
  .to('#page8>video',{
    width: '92vw'
  })

  //page10

  const tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: `#page10`,
      start: `top top`,
      end: `bottom top`,
      scroller: `#main`,
      pin: true,
      scrub:1
    },
  });
  tl10.to("#page10-main", {
    top: `-50%`,
    scrub:0.5

  })
  .to('#page10>video',{
    width: '92vw'
  })


