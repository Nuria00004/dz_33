const child = document.querySelector('.child')
console.log(child)
 let positionX = 0
 let positionY = 0

const move = ()=> {
    if(positionX <= 440 && positionY <= 0){
        positionX += 16
        child.style.left = `${positionX}px`
        setTimeout(move, 100)
    }
}
move()
//////////////////////////////////
const input = document.getElementById('customerGmail')
const btn = document.querySelector('.btn')
const block = document.querySelector('.block')

const regExp = /^[A-Za-z0-9\-\.\_]+\@[gmail]+\.[A-Za-z]{2,3}$/;

btn.onclick =()=>{
    if(regExp.test(input.value)){
        block.innerHTML = 'OK'
        block.style.color = 'green'
    }else{(regExp.test(input.value))
        block.innerHTML = 'NOT OK'
        block.style.color = 'red'
    }
}



