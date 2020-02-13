var mouseCursor = document.querySelector('.cursor');
var navlinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(ev)
{
    // console.log(ev);
    //to get the co ordinates of mouse position
   mouseCursor.style.top = ev.pageY + 'px';
   mouseCursor.style.left = ev.pageX + 'px';
} 

navlinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    })

    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    })
});