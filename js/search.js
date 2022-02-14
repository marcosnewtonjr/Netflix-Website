let icon = document.querySelector('.search-icon')
let box = document.querySelector('.search-box')
let foco = document.querySelector('#search-box')
let clear = document.querySelector('.clear-icon')
let body = document.querySelector('body')

icon.onclick = function() {
    box.classList.toggle('active')
    foco.focus()
    foco.value = ''
}

clear.onclick = function() {
    if (foco.value.length > 0) {
        foco.value = ''
        foco.focus()
    }
}