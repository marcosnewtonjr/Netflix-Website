const icon = document.querySelector('.search-icon')
const box = document.querySelector('.search-box')
icon.onclick = function() {
    box.classList.toggle('active')
}