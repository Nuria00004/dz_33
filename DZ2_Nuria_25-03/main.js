const child = document.querySelector('.child')
console.log(child)
 let positionX = 0
 let positionY = 0

const move = ()=> {
    if(positionX <= 440 && positionY <= 0){
        positionX += 16
        child.style.left = `${positionX}px`
        setTimeout(move, 100)
    }else if(positionY <= 440 && positionX >= 440){
        positionY += 16
        child.style.top = `${positionY}px`
        setTimeout(move, 100)
    }else if(positionX > 0 && positionY >= 440){
        positionX -= 16
        child.style.left = `${positionX}px`
        setTimeout(move, 100)
    }
    else if(positionY >= 0 && positionX <= 0) {
        positionY -= 16
        child.style.top = `${positionY}px`
        setTimeout(move, 100)
    }
}
move()

const counter = document.querySelector('.counter')
const btnStart = document.querySelector('.btn_start')
const btnStop = document.querySelector('.btn_stop')
const btnClear = document.querySelector('.btn_clear')
const btnResume = document.querySelector('.btn_resume')

let i = 0
let stop


btnStart.addEventListener('click', () => {
    stop = setInterval(() => {
        i++
        counter.innerHTML = i
    }, 1000)
})
////////////////////////
btnStop.addEventListener('click', () => {
   clearInterval(stop)
})
////////////////////////
btnClear.addEventListener('click', () => {
    i = 0
    counter.innerHTML = i
    clearInterval(stop)
})
////////////////////////
btnResume.addEventListener('click', () => {
    stop = setInterval(() => {
        i++
        counter.innerHTML = i
    }, 1000)
})






