
let iconSearch = document.querySelector('.search-icon-box')
let iconClear = document.querySelector('.clear-icon')
let box = document.querySelector('.search-box')
let search = document.querySelector('#search-box')
let close1 = document.querySelector('.background')
let close2 = document.querySelector('#head')
let close3 = document.querySelector('#header')
let close4 = document.querySelector('.user')

iconSearch.onclick = function() {
    if (box.style.width == '35px') {
        box.style.width = '270px'
        box.style.border = 'solid 1px white'
        box.style.backgroundColor = 'var(--darkTransparent)'
        search.focus()
    } else {
        box.style.width = '35px'
        box.style.border = ''
        box.style.backgroundColor = ''
        search.value = ''
    }
}

search.onkeyup = function() {
    let campo = search.length
    if(campo != 0) {
        iconClear.style.display = 'block'
    }
}

iconClear.onclick = function() {
    search.value = ''
    iconClear.style.display = 'none'
    search.focus()
}

window.onclick = function(e) {
    if (e.target == close1 || e.target == close2 || e.target == close3 || e.target == close4) {
        box.style.width = '35px'
        box.style.border = ''
        box.style.backgroundColor = ''
    }
}