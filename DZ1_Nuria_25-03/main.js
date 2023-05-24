const child = document.querySelector('.child')
console.log(child)
 let positionX = 0
 let positionY = 0

const move = ()=> {
    // child.style.marginLeft = 100 + "px"
    // child.style.marginLeft = `${200}px`// интерпаляция
    if(positionY < 450 && positionX === 0){
          setTimeout(()=> {
        positionY = positionY + 10
        console.log(positionY)
        child.style.marginLeft = `${positionY}px`

        move()

    },50)
    }


}
move()
//////////////////////////////////
const input = document.getElementById('customerGmail')
const btn = document.querySelector('.btn')
const block = document.querySelector('.block')

const regExp = /^[A-Za-z0-9\-\.\_]+\@[gmail]+\.[A-Za-z]{2,3}$/ //$ - после этого ничего нельзя писать
// ^ - должно начинаться с начала
// $ - с конца

btn.onclick =()=>{
    if(regExp.test(input.value)){
        block.innerHTML = 'GREAT!'
        block.style.color = 'green'
    }else{(regExp.test(input.value))
        block.innerHTML = 'Invalid email format'
        block.style.color = 'red'
    }
}

//input.value - для инпута
//innerHTML - для остальных тегов

// if(positionX <= 440 && positionY <= 0){
//         positionX += 16
//         child.style.left = `${positionX}px`
//         setTimeout(move, 100)
//     }

