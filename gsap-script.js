gsap.registerPlugin(Flip,MorphSVGPlugin,ScrollTrigger,SplitText)



function init() {

  // Get element height
  const portfolioElement = document.querySelector(".c-home__right");
  const portfolioHeight = portfolioElement.offsetHeight;
  const sectionHeight = portfolioHeight / 6;

  // Set initial state
  gsap.set(".c-home__content-wrapper", { visibility: "hidden" });
  //gsap.set(".c-home__content-wrapper.about", { opacity: 1, visibility: "visible" });

  // SECTION 2
  ScrollTrigger.create({
    trigger: ".c-home-portfolio",
    start: `${sectionHeight}px bottom`,
    end: `${sectionHeight * 2}px bottom`,
    onEnter: () => {
      gsap.to(".c-home__content-wrapper.about", { 
        autoAlpha: 0,
        duration: 0.3 
      });
      gsap.to(".c-home__content-wrapper.overview", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".c-home__content-wrapper.overview", { 
      	autoAlpha: 0,
        duration: 0.3 
      });
      gsap.to(".c-home__content-wrapper.about", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    }
  });

  // SECTION 3
  ScrollTrigger.create({
    trigger: ".c-home-portfolio",
    start: `${sectionHeight * 2}px bottom`,
    end: `${sectionHeight * 3}px bottom`,
    onEnter: () => {
      gsap.to(".c-home__content-wrapper.overview", { 
      	autoAlpha: 0,
        duration: 0.3 
      });
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
      gsap.to(".c-home__content-services.website", { 
      	autoAlpha: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 0,
        duration: 0.3,
      });
      gsap.to(".c-home__content-services.website", { 
      	autoAlpha: 0,
      });
      gsap.to(".c-home__content-wrapper.overview", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    }
  });

  // SECTION 4
  ScrollTrigger.create({
    trigger: ".c-home-portfolio",
    start: `${sectionHeight * 3}px bottom`,
    end: `${portfolioHeight * 4}px bottom`,
    onEnter: () => {
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 1,
      });
      gsap.to(".c-home__content-services.website", { 
      	autoAlpha: 0,
        duration: 0.3
      });
      gsap.to(".c-home__content-services.product", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 1,
      });
      gsap.to(".c-home__content-services.product", { 
      	autoAlpha: 0,
        duration: 0.3
      });
      gsap.to(".c-home__content-services.website", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    }
  });
  
  // SECTION 5
  ScrollTrigger.create({
    trigger: ".c-home-portfolio",
    start: `${sectionHeight * 4}px bottom`,
    end: `${portfolioHeight * 5}px bottom`,
    onEnter: () => {
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 1,
      });
      gsap.to(".c-home__content-services.product", { 
      	autoAlpha: 0,
        duration: 0.3
      });
      gsap.to(".c-home__content-services.brand", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 1,
      });
      gsap.to(".c-home__content-services.brand", { 
      	autoAlpha: 0,
        duration: 0.3
      });
      gsap.to(".c-home__content-services.product", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    }
  });
  
  // SECTION 6
  ScrollTrigger.create({
    trigger: ".c-home-portfolio",
    start: `${sectionHeight * 5}px bottom`,
    end: `${portfolioHeight * 6}px bottom`,
    onEnter: () => {
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 0,
      });
      gsap.to(".c-home__content-services.brand", { 
      	autoAlpha: 0,
        duration: 0.3
      });
      gsap.to(".c-home__content-wrapper.how", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    },
    onLeaveBack: () => {
      gsap.to(".c-home__content-wrapper.how", { 
      	autoAlpha: 0,
        duration: 0.3
      });
      gsap.to(".c-home__content-wrapper.services", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
      gsap.to(".c-home__content-services.brand", { 
      	autoAlpha: 1,
        duration: 0.3,
        delay: 0.2
      });
    }
  });
}

//
function init() {
  // HIDE HERO ON SCROLL
  //let mm = gsap.matchMedia();
  //mm.add("(min-width: 768px)", () => {
    gsap.to(".c-homecl-hero", {
      opacity: 0,
      y: 0,
      scrollTrigger: {
        trigger: ".c-homecl-showcase",
        start: 0,
        end: "top +=180px",
        pin: ".c-homecl-hero",
        pinSpacing: false,
        scrub: true,
        //markers: true
      },
    })
  //});


  //SCROLL SPEED FEATURED PORTFOLIO
  const featuredPortfolio = gsap.utils.toArray(".c-homecl-showcase > .c-homecl-showcase__item");

  featuredPortfolio[0].setAttribute("data-speed", "1.3");
  featuredPortfolio[1].setAttribute("data-speed", "2.3");
  featuredPortfolio[2].setAttribute("data-speed", "3");
  featuredPortfolio[3].setAttribute("data-speed", "1.75");

  featuredPortfolio.forEach((item, index) => {
    console.log(item);
  });


  // SECTION SERVICES
  const services = gsap.utils.toArray(".c-homecl-services__content-wrapper > .c-homecl-services__content");
  services.forEach((item, index) => {
    console.log(item);
  });
  const servicesTitle = gsap.utils.toArray(".c-homecl-services__content > h2");
  servicesTitle.forEach((item, index) => {
    console.log(item);
  });
  const servicesImage = gsap.utils.toArray(".c-homecl-services__image-content > .c-homecl-services__image");
  servicesImage.forEach((item, index) => {
    console.log(item);
  });

  ScrollTrigger.create({
    trigger: ".s-homecl-services",
    start: "top top",
    end: "bottom bottom",
    pin: ".c-homecl-services__image-wrapper",
    pinSpacing: false,
    scrub: 1,
    //markers: true,
    snap: {
      snapTo: services,
      duration: 0.3,
      delay: 0.1,
      ease: "power1.inOut"
    },
  });

  //mm.add("(min-width: 768px)", () => {
    gsap.to(servicesImage[0], {
      yPercent: -100,
      duration: 1,
      scrollTrigger: {
        trigger: servicesTitle[0],
        start: "top bottom",
        //markers: true,
      },
    });

    gsap.to(servicesImage[1], {
      yPercent: -100,
      duration: 1,
      scrollTrigger: {
        trigger: servicesTitle[1],
        start: "top bottom",
        //markers: true,
      },
    });

    gsap.to(servicesImage[2], {
      yPercent: -100,
      duration: 1,
      scrollTrigger: {
        trigger: servicesTitle[2],
        start: "top bottom",
        //markers: true,
      },
    });
  //});


  //SECTION EXPECT
  document.fonts.ready.then(() => {

    const expectPoint = gsap.utils.toArray(".c-homecl-expect__point");
    const expectPointSplit = [];
    // Loop membuat SplitText untuk setiap metricsNumber
    expectPoint.forEach((item, index) => {
      let split = SplitText.create(item, {
        type: "words, lines",
        mask: "lines",
        autoSplit: true,
      });
    // Simpan instance ke array dengan index yang sama
    expectPointSplit[index] = split;
    });

    expectPointSplit.forEach((item, index) => {
      console.log(item);
    });

    var expect2In = gsap.timeline();
    expect2In.to(expectPointSplit[0].words, {
      yPercent: -100,
      autoAlpha: 0,
      duration: 0.5,
    })
    .to(expectPointSplit[1].words, {
      yPercent: -100,
      autoAlpha: 1,
      duration: 0.5,
    });

    ScrollTrigger.create({
      trigger: ".c-homecl-expect",
      start: "top-=100px top",
      markers: true,
      pin: ".c-homecl-expect",
      animation: expect2In,
    });


  }); //document.fonts.ready.then(()


} //function init()


//PAGE: ABOUT
// Move portfolio to Section-2
gsap.set(".c-about-approach__media", { x: -500 });

const portfolioMove = gsap.timeline();
portfolioMove.to(".c-about-hero__image-wrapper", {
  x: 500,
  duration: 1,
  delay: 0,
  ease: "none"
})
.to(".c-about-approach__media", {
  x: 0,
  duration: 1,
  delay: 0,
  ease: "none"
}, 0);

// MOVE PORTFOLIO TO SECTION 2
ScrollTrigger.create({
  trigger: ".c-about-hero",
  endTrigger: ".c-about-hero__image-wrapper",
  start: "top top",
  end: "bottom top",
  scrub: 1,
  animation: portfolioMove,
  //markers: true,
  //invalidateOnRefresh: true,
});

//======================================

// FIXED APPROACH IMAGE
// function getApproachPositionBottom() {
//   const approachImage = document.querySelector(".c-about-approach__media");
//   const approachImageHeight = approachImage.getBoundingClientRect().height;
//   const viewportSpacingBottom = 24;
//   return (window.innerHeight - viewportSpacingBottom);
// };
// ScrollTrigger.create({
//   trigger: ".c-about-approach__media",
//   start: "bottom bottom-=24px",
//   end: "bottom bottom-=24px",
//   endTrigger: ".c-about-approach__content",
//   //pin: ".c-about-approach__media",
//   //pinSpacing: false,
//   scrub: 1,
//   //markers: true,
//   //invalidateOnRefresh: true,
// });

//======================================

// FIXED TEAM CONTENT - show only on the device with bigger than mobile breakpoint
let mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
  ScrollTrigger.create({
    trigger: "#team-content",
    start: "bottom bottom-=24px",
    end: "bottom bottom-=24px",
    endTrigger: "#team-images",
    pin: "#team-content",
    //pinSpacing: false,
    scrub: 1,
    markers: {
      startColor:"fuchsia",
      endColor:"blue",
    },
  });
  
  //======================================

  // SCALE UP ANIMATION STORY TEASER
  gsap.set(".c-about-brand__image", {
    aspectRatio: "1/1",
    width: "200px",
    height: "200px"
  });
  const teaserScale = gsap.timeline();
  teaserScale.to(".c-about-brand__image", {
    aspectRatio: "auto",
    width: "100%",
    height: "100%",
    duration: 1,
    ease: "none"
  }, 0);

  //SCALE UP IMAGE
  ScrollTrigger.create({
    trigger: ".c-about-brand",
    start: "top top",
    end: "top+=150vh",
    scrub: 1,
    animation: teaserScale,
    //invalidateOnRefresh: true,
    //markers: true,
  });

  //PINNING IMAGE
  ScrollTrigger.create({
    trigger: ".c-about-brand",
    start: "top top",
    end: "bottom bottom",
    pin: ".c-about-brand__wrapper",
    scrub: 1,
    //invalidateOnRefresh: true,
    //markers: true,
  });	

  ScrollTrigger.refresh();

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});

//DIVIDER TEAM SCALEDOWN
gsap.to("#divider-team", {
  opacity: 0,
  width: 0,
  scrollTrigger: {
    trigger: "#divider-team",
    start: "top top+=128px",
    end: "top top",
    endTrigger: ".c-about-team__member-wrapper",
    pin: "#divider-team",
    pinSpacing: false,
    scrub: 1,
    //markers: true,
    //toggleActions: "play none none reverse"
  }
});


//PAGE: BRAND STORY
const brandStoryCanvas = document.querySelector(".c-brand-story__image-canvas");
const brandStoryC = document.querySelector(".c-brand-story__image");

function brandStoryImageMove() {
const brandStoryCanvasHeight = brandStoryCanvas.getBoundingClientRect().height;
const viewportHeight = window.innerHeight;
const targetTopPadding = 180;
const targetBottomSpace = 24;
return viewportHeight - brandStoryCanvasHeight - targetTopPadding - targetBottomSpace;
};

const brandStoryImage = gsap.timeline();
brandStoryImage.to(brandStoryCanvas, {
  y: brandStoryImageMove,
  duration: 0.24,
})
.to(brandStoryCanvas, {
  scale: 1.75,
  transformOrigin: "left bottom",
  duration: 1,
  delay: 0.24,
})
.to(brandStoryCanvas, {
  scale: 1.75,
  duration: 2,
  delay: 1.24,
}, 0);

ScrollTrigger.create({
  trigger: ".c-brand-story__content",
  start: 0,
  end: "bottom bottom-=24px",
  scrub: 2,
  markers: true,
  animation: brandStoryImage,
  //pin: ".c-brand-story__images-wrapper",
  //pin: ".c-brand-story__image-canvas",
  pin: ".c-brand-story__image-wrapper",
  //pinSpacing: false,
})



window.addEventListener("load", function(event) {
	init();
})