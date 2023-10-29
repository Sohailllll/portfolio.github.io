gsap.to(".page1", {
    scale: 1.1,
    scrollTrigger : {
        trigger : ".page1",
        scroller : "body",
        // markers : true,
        start : "top 10%",
        end : "top 35%",
        scrub : 1
    }
})
