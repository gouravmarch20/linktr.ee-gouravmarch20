particlesJS('particles-js', {
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        value_area: 889.1476416322727
      }
    },
    color: {
      value: '#4DD637'
    },
    shape: {
      type: 'star',
      stroke: {
        width: .2,
        color: '#DDD101'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 8,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.9,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 650,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 183.91608391608392,
        size: 1.5,
        duration: 2,
        opacity: 1,
        speed: 6
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
})

/* ---- stats.js config ---- */

var count_particles, stats, update
stats = new Stats()
stats.setMode(0)
stats.domElement.style.position = 'absolute'
stats.domElement.style.left = '0px'
stats.domElement.style.top = '0px'
document.body.appendChild(stats.domElement)
count_particles = document.querySelector('.js-count-particles')
update = function () {
  stats.begin()
  stats.end()
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length
  }
  requestAnimationFrame(update)
}
requestAnimationFrame(update)
