import Particles from "react-tsparticles";
import React from 'react'
import './CustomParticles.css'

const particlesConfig = {
    "background": {
      "color": {
        "value": "#000000"
      }
    },
    "fullScreen": {
      "zIndex": 1
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "repulse"
        }
      },
      "modes": {
        "attract": {
          "maxSpeed": 5
        },
        "repulse": {
          "maxSpeed": 5
        }
      }
    },
    "motion": {
      "reduce": {
        "factor": 1
      }
    },
    "particles": {
      "color": {
        "value": "#ff0000",
        "animation": {
          "h": {
            "enable": true,
            "speed": 2
          }
        }
      },
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "enable": true,
        "opacity": 0.4
      },
      "move": {
        "enable": true,
        "gravity": {
          "maxSpeed": 5
        },
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 3,
        "spin": {}
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "value": 0.5,
        "animation": {}
      },
      "roll": {
        "speed": 5
      },
      "size": {
        "value": {
          "min": 0.1,
          "max": 3
        },
        "animation": {}
      },
      "wobble": {
        "speed": 5
      }
    }
  }

const CustomParticles = () => {
    return (
        <Particles
          id="particles-tsparticles"
          options={particlesConfig}
        />
      );
    };


export default CustomParticles
