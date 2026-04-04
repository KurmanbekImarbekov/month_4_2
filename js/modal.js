const btnOpen = document.querySelector('#btn-get');
const btnClose = document.querySelector('.modal_close');
const modal = document.querySelector('.modal');

const showModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

btnOpen.onclick = showModal;
btnClose.onclick = closeModal;


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal() 
    }})


setTimeout(showModal, 10000)

function onScroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        showModal()
        document.removeEventListener('scroll', onScroll)
    }
}

document.addEventListener('scroll', onScroll)

