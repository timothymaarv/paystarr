import Page from "classes/Page.js";
import { each } from "lodash";

export default class Home extends Page {
  constructor() {
    super({
      id: "home",
      element: ".home",
      elements: {
        featureItems: document.querySelectorAll(".feature__item"),
        slides: document.querySelectorAll(".slide"),
      },
    });

    this.mobile = window.innerWidth <= 768;

    this.scroll();
    this.featureAnimations();
    this.slideAnimations();
    this.footerAnimations();

    window.addEventListener("resize", () => {
      this.onResize();
    });
  }

  create() {
    super.create();
  }

  scroll() {
    butter.init({
      wrapperId: "butter",
      cancelOnTouch: false,
      wrapperDamper: 0.08,
    });
  }

  featureAnimations() {
    const features = document.querySelector(".features");
    const mobile = this.mobile;
    // gsap.set(features, {
    //   borderRadius: "0rem",
    //   margin: "0rem",
    // });

    features.style.borderRadius = 0;
    features.style.margin = 0;

    console.log("features is", features);

    // console.log(this.selectorChildren.featureItems);

    gsap.registerPlugin("ScrollTrigger");

    if (!mobile) {
      ScrollTrigger.create({
        animation: gsap.to(".features", {
          borderRadius: "6rem",
          margin: "0rem 1.8rem",
        }),
        scrub: true, // back and forth
        // markers: true,
        start: "top center",
        trigger: ".feature__wrapper",
        endTrigger: ".slider",
        end: "top top",
      });
    } else {
      features.style.borderRadius = 0;
      features.style.margin = 0;
    }

    each(this.selectorChildren.featureItems, (item) => {
      const title = item.querySelector(".feature__item__title").textContent;
      const text = item.querySelector(".feature__item__title");
      const icon = item.querySelector(".feature__icon");
      const player = item.querySelector("lottie-player");

      if (title === "Compliance") {
        player.seek("60%");
      }

      if (title === "Support") {
        player.seek("100%");
        player.stop();
      }

      player.stop();

      // player.style.display = "none";

      item.addEventListener("mouseenter", () => {
        // player.style.display = "block";
        player.play();
      });

      item.addEventListener("mouseleave", () => {
        player.pause();
      });

      //   console.log(title);

      //   item.addEventListener("click", () => {
      //     console.log(title);
      //   });

      //   if (title === "Send") {
      //     const player = item.querySelector("lottie-player");
      //     player.play();
      //   }
    });
  }

  footerAnimations() {
    gsap.registerPlugin("ScrollTrigger");

    ScrollTrigger.create({
      animation: gsap.to(".footer", {
        borderTopLeftRadius: "6rem",
        borderTopRightRadius: "6rem",
      }),
      scrub: true, // back and forth
      // markers: true,
      start: "bottom 70%",
      trigger: ".slider",
      endTrigger: ".footer",
      end: "bottom 100%",
    });
  }

  slideAnimations() {
    const sliderTitles = [
      "Secure Currency Exchange",
      "Fast Payment Processing",
      "Multiple Payment Options",
    ];
    let active = 0;
    let percent = 0;

    each(this.selectorChildren.slides, (item, index) => {
      const title = item.querySelector(".slide__title").textContent;

      const titleWrapper = item.querySelector(".slide__title");
      const text = item.querySelector(".slide__text");

      const image = item.querySelector(".slide__image");
      const progress = item.querySelector(".progress");
      const bar = item.querySelector(".bar");

      const newProgress = document.cloneNode(progress);

      // console.log(item);

      const interval = setInterval(() => {
        percent += 1;

        if (percent === 100) {
          active =
            active < sliderTitles.length - 1
              ? (active % sliderTitles.length) + 1
              : 0;
          percent = 0;
        }

        if (index === active) {
          tweakValuesOn();
        } else {
          tweakValuesOff();
        }
      }, 150);

      item.addEventListener("click", () => {
        active = index;
        percent = 0;
      });

      function tweakValuesOn() {
        gsap.set(progress, {
          width: `${percent}%`,
          ease: "Expo.easeInOut",
        });

        titleWrapper.style.opacity = 1;
        text.style.opacity = 1;
        progress.style.display = "block";
        progress.style.backgroundColor = "#2B86F9";
        image.style.display = "block";
        // progress.style.width = `${percent}%`;
        image.style.zIndex = 10;
        bar.appendChild(progress);
      }

      function tweakValuesOff() {
        gsap.set(progress, {
          display: "none",
        });

        // progress.style.display = "none";
        // image.style.zIndex = 1;
        titleWrapper.style.opacity = 0.4;
        text.style.opacity = 0.4;
        // image.style.display = "none";

        gsap.to(image, {
          display: "none",
          zIndex: 1,
        });
      }

      // const title = item.querySelector(".feature__item__title").textContent;
      // const text = item.querySelector(".feature__item__title");
      // const icon = item.querySelector(".feature__icon");
    });
  }

  onResize() {
    const mobile = window.innerWidth <= 768;

    if (mobile) {
      this.mobile = true;
      this.featureAnimations();
    } else {
      this.mobile = false;
    }

    this.featureAnimations();
  }
}
