let point = 1;

const carousel1_button = function() {
    document.querySelector(".slide_container").
    style = "transform: translateX(0vw)"
    point = 1;
}

const carousel2_button = function() {
    document.querySelector(".slide_container").
    style = "transform: translateX(-100vw)"
    point = 2;
}

const carousel3_button = function() {
    document.querySelector(".slide_container").
    style = "transform: translateX(-200vw)"
    point = 3;
}

const carousel_next = function() {
    if (point<3) {
        document.querySelector(".slide_container").
        style = "transform: translateX(-"+ point +"00vw)";
        point = point + 1;
    } else {
        document.querySelector(".slide_container").
        style = "transform: translateX(0vw)";
        point = 1;
    }
}