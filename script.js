document.querySelectorAll('.nav-container > li.sub-menu').forEach(item => item.addEventListener('mouseover', function () {
    this.classList.add('menu-item-hover');
}));

document.querySelectorAll('.sub-menu-item').forEach(item => item.addEventListener('mouseout', function () {
    // console.log(this.parentElement);
    this.parentElement.classList.remove('menu-item-hover');
}));

document.querySelectorAll('.nav-container > li.sub-menu').forEach(item => item.addEventListener('mouseout', function (event) {
    if (!event.target.classList.contains('.sub-menu-item')) {
        this.classList?.remove('menu-item-hover');
    }
    
}));

document.querySelectorAll('.nav-container > li.sub-menu').forEach(item => item.addEventListener('touchend', function (event) {
    console.log(event);
    if (event.target.classList.contains('menu-link')){
        this.classList.toggle('menu-item-hover');
    }
}));