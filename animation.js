let sync = gsap.timeline();

sync.from(".top h1", {
 y:25,
 opacity:0,
 duration:0.2
})

sync.from(".score-card, .hitVat", {
    y:25,
    opacity:0,
    duration:0.2
   })

   sync.from(".container", {
    y:25,
    opacity:0,
    duration:0.1
   })
   sync.from(".bubble", {
    opacity:0,
    duration:0.1,
    stagger:0.001
   })
