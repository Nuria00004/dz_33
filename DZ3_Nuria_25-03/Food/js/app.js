//tabs
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")
const hideTabcontent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })}
const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}
hideTabcontent()
showTabContent()

tabsParent.addEventListener("click", (e) => {
    const target = e.target
    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabcontent()
                showTabContent(i)
            }
        })
    }
})
//////////////////////////1
let slide = 0;
function autoSlider () {
    const slider = setInterval( (i) => {
        slide++
        if (slide > 3) {
        slide = 0
            }
        hideTabcontent()
         showTabContent(slide)
    },3000)
}
autoSlider()
// modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''

}

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()

///////////////////////////////////////2

const scrollModal = ()=> {
    const page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        document.body.style.overflow = 'hidden'
    }
}
window.addEventListener('scroll', scrollModal)
/////////////////////////////////////3
setTimeout(openModal, 10000)