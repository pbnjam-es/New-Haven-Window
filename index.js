// window.addEventListener('DOMContentLoaded', () => {
//     // All your code goes here
//     var selected = "none"
//     console.log("LOADE!")
    
//     const line_246a = document.getElementById("line_246a")
//     const text_246a = document.getElementById("g-ai0-6")
//     const line_206 = document.getElementById("line_206")
//     const text_206 = document.getElementById("g-ai0-21")
//     const box = document.getElementById("g-Final-Project-Map-box")
//     // const return_button = document.getElementById("return-button")
//     d3.select("#return-button").attr("hidden", "")
//     reset_scrolling();
//     // const box = d3.select("#g-Final-Project-Map-box")
    
//     // line_246a.addEventListener("onmouseover", function() {
//     //     line_246a.style.strokeWidth = 10;
//     // });
    
//     d3.select("#line_246a").on('click', function(event) {
//         console.log("We've arrived at STEP 246a",);
//         selected = "246a";
//         const click_event = new CustomEvent('246a', {})
//         box.dispatchEvent(click_event);
//     })
//     d3.select("#line_206").on('click', function(event) {
//         console.log("We've arrived at STEP 206",);
//         selected = "206";
//         const click_event = new CustomEvent('206', {})
//         box.dispatchEvent(click_event);
//     })
//     d3.select("#g-ai0-21").on('click', function(event) {
//         console.log("We've arrived at STEP MOUSEOVER",);
//         selected = "206";
//         const click_event = new CustomEvent('206', {})
//         box.dispatchEvent(click_event);
//     })
//     d3.select("#g-ai0-6").on('click', function(event) {
//         console.log("We've arrived at STEP MOUSEOVER",);
//         selected = "246a";
//         const click_event = new CustomEvent('246a', {})
//         box.dispatchEvent(click_event);
//     })

//     d3.select("#g-Final-Project-Map-box").on('246a', function(event) {
//         d3.select("#g-Final-Project-Map-box").classed("animate-246a", true);
//         d3.select("#g-Final-Project-Map-Artboard_1-img").classed("animate-back-img", true);
//         d3.select("#map-shadow").classed("animate-back-img", true);
        
//         console.log("FIRED!")
//         d3.select("#choice").text("Choose a bus line: 246a")
//         reset_scrolling();
//         d3.select("#return-button").attr("hidden", null)
//         // Remove the class after the animation completes to allow retriggering
//         // d3.select("#g-Final-Project-Map-box").node().addEventListener('animationend', () => {
//             // d3.select("#g-Final-Project-Map-box").classList.remove('animate-246a');
//             // d3.select("#g-Final-Project-Map-box").classed("animate-246a", false);
//         // }, { once: true }); // Ensures the listener is only triggered once
//     })
//     d3.select("#g-Final-Project-Map-box").on('206', function(event) {
//         d3.select("#g-Final-Project-Map-box").classed("animate-206", true);
//         d3.select("#g-Final-Project-Map-Artboard_1-img").classed("animate-back-img", true);
//         d3.select("#map-shadow").classed("animate-back-img", true);
        
//         console.log("FIRED!")
//         d3.select("#choice").text("Choose a bus line: 206")
//         reset_scrolling();
//         d3.select("#return-button").attr("hidden", null)
//         // Remove the class after the animation completes to allow retriggering
//         // d3.select("#g-Final-Project-Map-box").node().addEventListener('animationend', () => {
//             // d3.select("#g-Final-Project-Map-box").classList.remove('animate-246a');
//             // d3.select("#g-Final-Project-Map-box").classed("animate-246a", false);
//         // }, { once: true }); // Ensures the listener is only triggered once
//     })
//     d3.select("#return-button").on('click', function(event) {
//         selected = "none";
//         d3.select("#choice").text("Choose a bus line:")
//         d3.select("#g-Final-Project-Map-box").classed("animate-246a", false);
//         d3.select("#g-Final-Project-Map-box").classed("animate-206", false);
//         d3.select("#g-Final-Project-Map-Artboard_1-img").classed("animate-back-img", false);
//         d3.select("#map-shadow").classed("animate-back-img", false);
//         reset_scrolling();
//         d3.select("#return-button").attr("hidden", "")
//         d3.selectAll(".stack").style("opacity", 0);
//         clearInterval(typewriterInterval); // Stop the animation
//         d3.select("#annotation").text(""); // Clear the text or reset it
//     })
//     function reset_scrolling() {
//         if (selected == "none") {
//             window.onscroll = function() {
//                 scrollTop =
//                 window.pageYOffset ||
//                 document.documentElement.scrollTop;
//                 console.log(scrollTop)
//                 if (scrollTop > 2600) {
//                     window.scrollTo(0, 2600);
//                 } 
//             }
//         }
//         else {
//             window.onscroll = function() {
    
//             }
//         }
//     };

//     d3.select("#step-one").style("opacity", 0);
//     d3.select("#step-two").style("opacity", 0);
//     d3.select("#step-three").style("opacity", 0);
//     d3.select("#green-flavor").style("opacity", 0);
//     d3.select("#step-four").style("opacity", 0);
//     d3.select("#step-five").style("opacity", 0);
//     d3.select("#step-six").style("opacity", 0);
//     d3.select("#g-Final-Project-Map-Artboard_1-img").style("opacity", 0);
//     d3.selectAll(".stack").style("opacity", 0);
    
//     d3.select("#step-one").on('progress', function(event) {
//         // console.log("We've arrived at STEP ONE", event.detail.progress);
//         d3.select("#step-one").style("opacity", event.detail.progress)
//     })
//     d3.select("#step-two").on('progress', function(event) {
//         // console.log("We've arrived at STEP ONE", event.detail.progress);
//         d3.select("#step-two").style("opacity", event.detail.progress)
//     })
//     d3.select("#step-three").on('progress', function(event) {
//         // console.log("We've arrived at STEP ONE", event.detail.progress);
//         d3.select("#step-three").style("opacity", event.detail.progress)
//     })
//     d3.select("#green-flavor").on('progress', function(event) {
//         // console.log("We've arrived at STEP ONE", event.detail.progress);
//         d3.select("#green-flavor").style("opacity", event.detail.progress)
//     })
//     d3.select("#step-four").on('progress', function(event) {
//         // console.log("We've arrived at STEP ONE", event.detail.progress);
//         d3.select("#step-four").style("opacity", event.detail.progress)
//     })
//     d3.select("#step-five").on('progress', function(event) {
//         // console.log("We've arrived at STEP ONE", event.detail.progress);
//         d3.select("#step-five").style("opacity", event.detail.progress)
//     })
//     d3.select("#step-six").on('progress', function(event) {
//         // console.log("We've arrived at STEP ONE", event.detail.progress);
//         d3.select("#step-six").style("opacity", event.detail.progress)
//     })


//     d3.select("#step-246a-seven").on('stepin', function(event) {
//         console.log(selected)
//         if (selected == "246a") {
//             console.log("STEPPED IN");
//             const el = d3.select("#annotation").node();
//             const message = "CTTransit operates over 22 local routes in New Haven, including line 246a, which I got on at the New Haven Green.";
            
//             clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//             typeWriter(el, message, 25);
//             // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//             // d3.select("#step-246a-seven").style("position", "fixed");
//         }
//     });
//     d3.select("#step-246a-seven").on('progress', function(event) {
//         if (selected == "246a") {

//             d3.select("#new-haven-green-video-246a").style("opacity", 5*event.detail.progress)
//         }

//     });
//     d3.select("#step-246a-seven").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });

//     d3.select("#step-246a-eight").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "At the Stop-and-Shop, a group of high-school-aged girls got off. 'See ya tomorrow!' The bus got significantly quieter.";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-eight").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });

//     d3.select("#step-246a-nine").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "After Pendleton Street, just one and a half miles from where I got on, the houses suddenly gave way to open fields and forest.";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }
        
//     });
//     d3.select("#step-246a-nine").on('progress', function(event) {
//         if (selected == "246a") {

//         d3.select("#forest-246a").style("opacity", 5*event.detail.progress)
//     }

//     });
//     d3.select("#step-246a-nine").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });

//     d3.select("#step-246a-ten").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "At Edgewood and Alden, the man making a call in Spanish got off. The bus went silent. ";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-ten").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });
//     d3.select("#step-246a-eleven").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "Later, I found out that at Fountain and Alden, the bus passed less than a minute from the cat cafe I often frequent. ";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-eleven").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });
//     d3.select("#step-246a-twelve").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "I had no idea - the landscape was so different, rows and rows of identical-looking plywood houses inhabited by the middle class. ";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-twelve").on('progress', function(event) {
//         if (selected == "246a") {

//             d3.select("#cat-cafe-246a").style("opacity", 5*event.detail.progress)
//         }
        
//     });
//     d3.select("#step-246a-twelve").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });
//     d3.select("#step-246a-thirteen").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "At Fountain and Pardee, I noticed that the bus had public anti-discrimination notices where normally ads would be. By now, I was the only one on the bus. ";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-thirteen").on('progress', function(event) {
//         if (selected == "246a") {

//             d3.select("#anti-discrimination-246a").style("opacity", 5*event.detail.progress)
//         }

//     });
//     d3.select("#step-246a-thirteen").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });
//     d3.select("#step-246a-fourteen").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "The bus finally stopped at the Stop and Shop in Amity, which was situated, like many suburban shopping complexes in America, in a ring of restaurants and stores around a massive parking lot.";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-fourteen").on('progress', function(event) {
//         if (selected == "246a") {

//             d3.select("#amity-246a").style("opacity", 5*event.detail.progress)
//         }

//     });
//     d3.select("#step-246a-fourteen").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });
//     d3.select("#step-246a-fifteen").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "I picked up some raspberries - a fruit I’ve never seen in Yale dining halls - and when I came out, I found a couple of grocery shoppers waiting for the bus back downtown. ";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-fifteen").on('progress', function(event) {
//         if (selected == "246a") {

//             d3.select("#store-246a").style("opacity", 5*event.detail.progress)
//         }

//     });
//     d3.select("#step-246a-fifteen").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });
//     d3.select("#step-246a-sixteen").on('stepin', function(event) {
//         if (selected == "246a") {

//         console.log("STEPPED IN");
//         const el = d3.select("#annotation").node();
//         const message = "After fifteen minutes of impatient waiting, the bus back finally came.";
        
//         clearInterval(typewriterInterval); // Reset in case user scrolled in too quickly
//         typeWriter(el, message, 25);
//         // d3.selectAll(".stack").style("opacity", 0)
//         // d3.select("#new-haven-green-video-246a").style("opacity", 1)
//         // d3.select("#step-246a-seven").style("position", "fixed");
//     }

//     });
//     d3.select("#step-246a-sixteen").on('stepout', function(event) {
//         if (selected == "246a") {

//         if (event.detail.direction === "up" || isTyping) {
//             console.log("STEPPED OUT");
//             // d3.select("#step-246a-seven").style("position", "relative");
//             clearInterval(typewriterInterval); // Stop the animation
//             d3.select("#annotation").text(""); // Clear the text or reset it
//             isTyping = false;
//         }
//     }

//     });

// const scroller = scrollama();

// scroller
//     .setup({
//         step: ".beat",
//         offset: 0.75,
//         progress: true,
//         // debug: true,
//     })
//     .onStepEnter(function({ element, index, direction}) {
//         const event = new CustomEvent('stepin', { detail: { direction: direction } })
//         element.dispatchEvent(event);
//     })
//     .onStepProgress(function({ element, index, progress, direction}) {
//         console.log('Step progress:', element.id, 'Progress:', progress);
//         const event = new CustomEvent('progress', { detail: { progress: progress , direction: direction} })
//         element.dispatchEvent(event);
//     })
//     .onStepExit(function({ element, index, direction }) {
//         const event = new CustomEvent('stepout', { detail: { direction: direction } })
//         element.dispatchEvent(event);
//     });


//     let typewriterInterval; // Global reference to the interval
//     let isTyping = false;

//     function typeWriter(element, text, speed) {
//         let i = 0;
//         isTyping = true;
//         element.textContent = ""; // Clear existing text

//         typewriterInterval = setInterval(function () {
//             if (i < text.length) {
//                 element.textContent += text.charAt(i);
//                 i++;
//             } else {
//                 clearInterval(typewriterInterval);
//                 isTyping = false;
//             }
//         }, speed);
//     }
// });

