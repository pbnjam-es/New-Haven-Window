window.addEventListener('DOMContentLoaded', () => {
    // All your code goes here
    var selected = "none"
    console.log("LOADE!")
    
    const line_246a = document.getElementById("line_246a")
    const text_246a = document.getElementById("g-ai0-6")
    const line_206 = document.getElementById("line_206")
    const text_206 = document.getElementById("g-ai0-21")
    const box = document.getElementById("g-Final-Project-Map-box")
    // const box = d3.select("#g-Final-Project-Map-box")
    
    // line_246a.addEventListener("onmouseover", function() {
    //     line_246a.style.strokeWidth = 10;
    // });
    
    d3.select("#line_246a").on('click', function(event) {
        console.log("We've arrived at STEP 246a",);
        selected = "246a";
        const click_event = new CustomEvent('246a', {})
        box.dispatchEvent(click_event);
    })
    d3.select("#line_206").on('click', function(event) {
        console.log("We've arrived at STEP 206",);
        selected = "206";
        const click_event = new CustomEvent('206', {})
        box.dispatchEvent(click_event);
    })
    d3.select("#g-ai0-6").on('click', function(event) {
        console.log("We've arrived at STEP MOUSEOVER",);
        selected = "206";
        const click_event = new CustomEvent('206', {})
        box.dispatchEvent(click_event);
    })
    d3.select("#g-ai0-21").on('click', function(event) {
        console.log("We've arrived at STEP MOUSEOVER",);
        selected = "246a";
        const click_event = new CustomEvent('246a', {})
        box.dispatchEvent(click_event);
    })

    d3.select("#g-Final-Project-Map-box").on('246a', function(event) {
        d3.select("#g-Final-Project-Map-box").classed("animate-246a", true);
        console.log("FIRED!")
        // Remove the class after the animation completes to allow retriggering
        // d3.select("#g-Final-Project-Map-box").node().addEventListener('animationend', () => {
            // d3.select("#g-Final-Project-Map-box").classList.remove('animate-246a');
            // d3.select("#g-Final-Project-Map-box").classed("animate-246a", false);
        // }, { once: true }); // Ensures the listener is only triggered once
    })
});
