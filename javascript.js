const navLinks = document.querySelectorAll("#sections a")
const projects = document.querySelectorAll("#project")

// scroll based navbar highlight
window.addEventListener('scroll', () => {
const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrolled = parseInt((winScroll / height) * 100);
navLinks.forEach(item => item.classList.remove("selected"))

if(0 <= scrolled && scrolled < 16) {
    document.querySelector("#sections a:nth-of-type(1)").classList.add('selected')}
else if (16 <= scrolled && scrolled < 39) {
        document.querySelector("#sections a:nth-of-type(2)").classList.add('selected')}
else if (39 <= scrolled && scrolled < 85) {
        document.querySelector("#sections a:nth-of-type(3)").classList.add('selected')}
else if (scrolled >= 85) {
        document.querySelector("#sections a:nth-of-type(4)").classList.add('selected')}     
});

// project animation
projects.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const childerns = item.children
        childerns[1].classList.remove("hide")
        childerns[2].classList.remove("hide")
    })
    item.addEventListener("mouseleave", () => {
        const childerns = item.children
        childerns[1].classList.add("hide")
        childerns[2].classList.add("hide")
    })
})