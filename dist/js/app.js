// #about-me
// #home-my-work

const sc = new SmoothScroll();
const ui = new UI();

document.getElementById('about-btn').addEventListener('click', (e)=>{
    sc.smoothScroll('#about-section', 1000)
    e.preventDefault();
});
document.getElementById('projects-btn').addEventListener('click', (e)=>{
    sc.smoothScroll('#home-my-work', 1000)
    e.preventDefault();
});

document.getElementById('view-projects-btn').addEventListener('click', (e)=>{
    sc.smoothScroll('#home-my-work', 1000)
    e.preventDefault();
});
document.getElementById('technologies-btn').addEventListener('click', (e)=>{
    sc.smoothScroll('#home-c', 1000)
    e.preventDefault();
});

document.getElementById('sort').addEventListener('click', ()=>{ui.paintModal('sort');});
document.getElementById('weather').addEventListener('click', ()=>{ui.paintModal('weather');});
document.getElementById('shop').addEventListener('click', ()=>{ ui.paintModal('shop');});

document.getElementById('close-modal').addEventListener('click', ()=>{
    document.querySelector('.modal').style.display = "none";
    document.querySelector('.overlay').style.display = "none";
});

