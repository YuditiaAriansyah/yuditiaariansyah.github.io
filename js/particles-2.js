(function () {
  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return; // respect accessibility preference: leave the static gradient, skip animation entirely
  }

  var isSmallScreen = window.innerWidth < 768;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: isSmallScreen ? 25 : 55,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: ["#8b5cf6", "#ffffff"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#6928e6",
        opacity: 0.35,
        width: 1.2
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: !isSmallScreen,
          mode: "grab"
        },
        onclick: {
          enable: false
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 160,
          line_linked: {
            opacity: 0.5
          }
        }
      }
    },
    retina_detect: true
  });
})();
