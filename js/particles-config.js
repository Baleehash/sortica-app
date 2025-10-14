// ==============================
// Particles.js - Waste Theme Configuration
// ==============================
window.addEventListener('load', function() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: ['#10B981', '#059669', '#34D399', '#6EE7B7', '#A7F3D0']
                },
                shape: {
                    type: ['circle', 'edge'],
                    stroke: {
                        width: 1,
                        color: '#10B981'
                    },
                    polygon: {
                        nb_sides: 6
                    }
                },
                opacity: {
                    value: 0.2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.6,
                        opacity_min: 0.05,
                        sync: false
                    }
                },
                size: {
                    value: 8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 2,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 180,
                    color: '#10B981',
                    opacity: 0.12,
                    width: 1.5
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 800,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 0.3
                        }
                    },
                    bubble: {
                        distance: 250,
                        size: 0,
                        duration: 2,
                        opacity: 0.5,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.6
                    },
                    push: {
                        particles_nb: 2
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
});
