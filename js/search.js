
let iconSearch = document.querySelector('.search-icon-box')
let iconClear = document.querySelector('.clear-icon')
let box = document.querySelector('.search-box')
let search = document.querySelector('#search-box')
let header = document.querySelector('#header')

iconSearch.onclick = function() {
    if (box.style.width == '35px') {
        box.style.width = '270px'
        box.style.border = 'solid 1px white'
        box.style.backgroundColor = 'var(--darkTransparent)'
        search.focus()
        if(search.value.length == 0) {
            iconClear.style.display = 'none'
        }
    } else {
        box.style.width = '35px'
        box.style.border = ''
        box.style.backgroundColor = ''
        search.value = ''
    }
}

iconClear.onclick = function() {
    search.value = ''
}

window.onclick = function(e) {
    if (e.target == header) {
        box.style.width = '35px'
        box.style.border = ''
        box.style.backgroundColor = ''
    }
}