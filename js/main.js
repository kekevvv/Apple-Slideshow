var buttons = document.querySelectorAll('.menu > ul > .button');
var images = document.querySelector('.images');
var gallery = document.querySelector('.gallery');
var n = 0;

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(event){
        event.preventDefault();
        var index = getIndex(event.currentTarget);
        images.style.cssText = `transform:translateX(${-index*920}px);`;
        event.currentTarget.classList.add('active');
        removeAcitve(event.currentTarget);
        n = index;
    });
}

var size = buttons.length;
buttons[n%size].click();
var timer = createTimer();
gallery.addEventListener('mouseenter',()=>{
    window.clearInterval(timer);
})
gallery.addEventListener('mouseleave',()=>{
    timer = createTimer();
})
function createTimer(){
    return setInterval(()=>{
            n+=1;
            buttons[n%size].click();
        },2000);
}

function getIndex(element){
    var allChildren = element.parentNode.children;
    var n = 0;
    for(let i = 0;i<allChildren.length;i++){
        if(allChildren[i] === element){
            n = i;
        }
    }
    return n;
}
function removeAcitve(element){
    var allChildren = element.parentNode.children;
    for(let i = 0;i<allChildren.length;i++){
        if(allChildren[i] !== element){
            allChildren[i].classList.remove('active');
        }
    }
}