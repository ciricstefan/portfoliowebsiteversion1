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

    }
}