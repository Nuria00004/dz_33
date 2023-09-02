// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
// setTimeout(openModal, 10000)
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

const scrollHandler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollHandler)
    }
}

window.addEventListener('scroll', scrollHandler)

// POST DATA

const form = document.querySelector('form')

const postData = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-type", "application/json")

        const formData = new FormData(form)
        const obj = {}
        formData.forEach((item, i) => {
            obj[i] = item
        })
        const json = JSON.stringify(obj)

        request.send(json)

        request.onload = () => {
            console.log(request.response)
        }
    })
}

postData(form)
