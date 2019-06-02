let pageHeight, screenHeight, pageSections, ticking, currentSection;

// reference: https://developer.mozilla.org/en-US/docs/Web/Events/scroll
// reference for above reference: http://www.html5rocks.com/en/tutorials/speed/animations/

document.addEventListener("DOMContentLoaded", function(event) {
    // get height of screen
    screenHeight = screen.height;
    // get all page-sections on page
    pageSections = document.getElementsByClassName("page-section");
    // set total page height depending on number of projects
    pageHeight = screenHeight * pageSections.length;
    // use half so user doesn't have to scroll a lot
    document.getElementById("body").style.height = pageHeight/2 + "px";
    //check scroll position
    checkScroll();
});

// every time user scrolls check which section needs to be visible
window.addEventListener("scroll", function(e) {
    checkScroll();
});

function checkScroll() {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            checkSection(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
}

function checkSection(scroll_pos) {
    // depending on scroll position get x which will be used as section index for pageSections
    let x = Math.floor(scroll_pos / (screenHeight/2));
    if(currentSection !== x) {
        // show section which index is same as x
        chooseSection(x);
    }
}

function chooseSection(x) {
    // set current section
    currentSection = x;
    // hide every project section using class hidden
    for (var i = pageSections.length - 1; i >= 0; i--) {
        pageSections[i].classList.add("hidden");
    }
    // set bg color on body from data-bgcolor attr
    document.getElementById("body").style.background = pageSections[x].dataset.bgcolor;
    // set text color from data attr
    document.getElementById("body").style.color = pageSections[x].dataset.textcolor;
    // show appropriate section
    pageSections[x].classList.remove("hidden");
    pageSections[x].classList.add("shown");
}