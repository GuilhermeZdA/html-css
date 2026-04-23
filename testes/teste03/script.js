var open = document.querySelector('#openModal')
var close = document.querySelector('#closeModal')
var dialog = document.querySelector('#modalDialog')

open.addEventListener('click', (e) => {
    dialog.showModal();
})

close.addEventListener('click', (e) => {
    dialog.close()
})