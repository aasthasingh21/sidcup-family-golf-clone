
// (FOR CURSOR AND CURSOR BLUR)
var curs = document.querySelector("#cursor") // getting cursor property from css
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){   // dets : whatever is happening with mouse(where it was clicked,how many times etc)
    curs.style.left = dets.x+ 30 +"px" 
    curs.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 +"px"  // -150 so that both overlaps cursor and blur (so that cursor comes in the center of blur)
    blur.style.top = dets.y- 200 +"px"
});

//(TO CHANGE CURSOR(BECOMES BIGGER CIRCLE) WHILE HOVERED ON NAV H4)
var h4all = document.querySelectorAll("#nav h4, img, button")
h4all.forEach(function(elem) {  // foreach (is a loop which works for array), elem is the particular element which is selected
    elem.addEventListener("mouseenter", function() {
        curs.style.scale = 3  // when we hover on nav(h4) cursor expands/increases
        curs.style.border = "1px solid #fff"
        curs.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function() {
        curs.style.scale = 1  // when we hover back from nav(h4) cursor come back to normal
        curs.style.border = "0px solid #fff"
        curs.style.backgroundColor = "#95c11e"
    })
    
});

// can access all the css property (TO MODIFY NAVBAR)
gsap.to("#nav", {
    backgroundColor : "black",  // for nav background color property
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav", // what element to trigger
        scroller:"body", // what will scroll
        // markers:true,  // they show a marker where it starts and where it ends
        start:"top -10%",  // bg comes after you start scrolling
        end:"top -11%",
        scrub:1  // to play on loop can be true/false or even 1,2....(are time in seconds)
    }

});

// (TO STOP THE BACKGROUND VIDEO ONCE ENTERED THE MAIN)
gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers:true,
        start:"top -25%", // to change the color for second page
        end:"top -70%",
        scrub:2
    }
});


//(TO ADD ANIMATION SO ITS SEEMS TO BE COMING UP WHEN SCROLLED ABOUT US PAGE)
gsap.from("#page3 img, #about-us", {
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4, // so that all element come one by one (elemsent seems to come up)
    scrollTrigger: {
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
});

//(TO ADD ANIMATION SO ITS SEEMS TO BE COMING UP WHEN SCROLLED CARDS PAGE)
gsap.from(".cards", {
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4, // so that all element come one by one (elemsent seems to come up)
    scrollTrigger: {
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
});

// (TO ANIMATE THE COLONS)
gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
});

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger: {
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 70%",
        scrub:4
    }
});

gsap.from("#page7 h1",{
    y:50,
    scrollTrigger: {
        trigger:"#page7 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 70%",
        scrub:4
    }
});

