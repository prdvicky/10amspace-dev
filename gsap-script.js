gsap.registerPlugin(Flip,MorphSVGPlugin,ScrollTrigger,SplitText)

function init() {
  //gsap.registerPlugin(ScrollTrigger);

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

window.addEventListener("load", function(event) {
	init();
})