particlesJS("particles-js",
    {
        "particles":
        {
            "number":
            {
                "value": 15,
                "density": { "enable": true, "value_area": 789.1476416322727 }
            },
            "color": { "value": "#ffffff" },
            "shape": {
                "type": "circle", "stroke": { "width": 3, "color": "#f0f6da" },
                "polygon": { "nb_sides": 8 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 }
            },
            "opacity": { "value": 0.41035677364878176, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 70.403120289774996, "random": true, "anim": { "enable": false, "speed": 45.57842157842158, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 },
            "move": {
                "enable": true, "speed": 4.734885849793636,
                "direction": "top", "random": false, "straight": false, "out_mode": "out",
                "bounce": false, "attract": { "enable": false, "rotateX": 2367.442924896818, "rotateY": 1104.8066982851817 }
            }
        },
        "interactivity": {
            "detect_on": "canvas", "events": {
                "onhover": { "enable": true, "mode": "bubble" },
                "onclick": { "enable": true, "mode": "repulse" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 503.4965034965035, "line_linked": { "opacity": 0.5 } },
                "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 },
                "repulse": { "distance": 200, "duration": 0.4 },
                "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    });
// var count_particles, stats, update; stats = new Stats; stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin(); stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    } requestAnimationFrame(update);
}; requestAnimationFrame(update);;

$(document).ready(function () {
    let elements = document.getElementsByClassName("js-text");
    for (var i = 0; i < elements.length; i++) {
        animateText(elements[i]);
    }
});

function animateText(element) {
    // elementの文字情報のみをtextという変数に代入
    let text = element.innerText;
    element.innerText = "";

    // textの一文字ずつをspanタグで囲う
    for (var i = 0; i < text.length; i++) {
        var span = document.createElement("span");
        span.innerText = text[i];
        element.appendChild(span);
    }

    // spanで囲った文字をspansに代入
    let spans = element.getElementsByTagName("span");

    // spansのstyleをopacity=1にする処理を、文字数分繰り返す
    for (var j = 0; j < spans.length; j++) {
        (function (index) {
            setTimeout(function () {
                spans[index].style.opacity = 1;
            }, index * 400);
        })(j);
    }
}

$(window).scroll(function() {
    $('.fadein').each(function() {
        var mainHeight = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > mainHeight - windowHeight) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateY(0)');
        }
    });
});