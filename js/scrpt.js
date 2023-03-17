
// STRING TYPER
var typed = new Typed('#typer',{
    strings: ['Frontend Develpoer', 'Designer', 'AR/VR Entusiast'],
    typespeed:100,
    backspeed:100,
    backspeed:1000,
    loop:true
});

//Scroll reveal
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });