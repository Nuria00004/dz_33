const child = document.querySelector('.child')

 let positionY = 0
 let positionX = 0

const move = ()=> {
    if(positionX <= 440 && positionY <= 0){
        positionX = positionX + 16
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

let count = 0
let stop;


btnStart.addEventListener('click', () => {
    stop = setInterval(() => {
        count=count+1
        counter.innerHTML = count
    }, 1000)
})

////////////////////////
btnStop.addEventListener('click', () => {
   clearInterval(stop)
})
////////////////////////
btnClear.addEventListener('click', () => {
    count = 0
    counter.innerHTML = count
    clearInterval(stop)
})
////////////////////////
btnResume.addEventListener('click', () => {
    stop = setInterval(() => {
        count++
        counter.innerHTML = count
    }, 1000)
})




// setTimeout(()=>{
//     console.log("setTimeout")
// },1000)
//
// setInterval(()=>{
//     console.log("interval")
// },1000)

