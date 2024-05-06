let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lenghtItems = items.length-1;

next.onclick = function(){
    if(active + 1 > lenghtItems){
        active = 0;
    }
    else{
        active += 1;
    }
    reloadSlider();

}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lenghtItems;
    }
    else{
        active -= 1;
    }
    reloadSlider();

}
let refreshSlider = setInterval(()=>{next.click()}, 3000)

function reloadSlider(){
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()}, 3000)
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

let slider = document.getElementById('slider');

function setItemWidth() {
    // Set each item's width to the width of the slider container
    const listWidth = slider.clientWidth; // Get the width of the parent container
    console.log(listWidth);
    items.forEach(item => {
        item.style.width = listWidth + 'px';
    });
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';
}

window.addEventListener('resize', () => {
    setItemWidth(); 
});

setItemWidth();