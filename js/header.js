const header = document.querySelector('#header');
header.classList.remove('active');
window.onscroll = function() {
    let top = window.scrollY;
    console.log(top);
    if(top == 0) {
        header.classList.remove('active')
    } else {
        header.classList.add('active')
    }
}