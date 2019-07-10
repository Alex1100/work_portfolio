/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#30323d"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 8,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 8
      },
      "image": {
        "src": "https://i.pinimg.com/236x/c7/b6/dc/c7b6dc6a0ecb9869ff6d4c8e72772492--storm-troopers-storms.jpg",
        "width": 300,
        "height": 300
      }
    },
    "opacity": {
      "value": 0.07215354273894853,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 2.4362316369040355,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 24.05118091298284,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 9.74492654761614,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#f21549",
      "opacity": 0.4,
      "width": 1.9240944730386271
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 2886.1417095579413,
        "rotateY": 4489.553770423464
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 203.7962037962038,
        "line_linked": {
          "opacity": 0.8418939375541366
        }
      },
      "bubble": {
        "distance": 816.1375983628518,
        "size": 1,
        "duration": 0.8120772123013451,
        "opacity": 0.1,
        "speed": 3
      },
      "repulse": {
        "distance": 407.5924075924076,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);
