// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'YOUR NUMBER IS VALID!'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'YOUR NUMBER IS NOT VALID'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

// CONVERTER

// DRY - don`t repeat yourself
// KISS - keep it short and simple

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");
const convert = (elem, target, target2) => {
    elem.oninput =async () => {
        const getData = async () => response = ((await fetch('../data/converter.json')).json())
        const request = await getData()
        if (elem === som) {
            target.value = (elem.value / request.usd).toFixed(2);
            target2.value = (elem.value / request.eur).toFixed(2);
        } else if (elem === usd) {
            target.value = (elem.value * request.usd).toFixed(2);
            target2.value = (target.value / request.eur).toFixed(2);
        } else if (elem === eur) {
            target.value = (elem.value * request.eur).toFixed(2);
            target2.value = (target.value / request.usd).toFixed(2);
        }
        elem.value === "" && (target.value = "")
        elem.value === "" && (target2.value = "");
    };
};
convert(som, usd, eur);
convert(usd, som, eur);
convert(eur, som, usd);


// lesson6
//////////////////////////////////////////////////
// console.log('Hello')

// Hell CallBack

// setTimeout(() => {
//     let num = 0
//     console.log(num)
//     setTimeout(() => {
//         console.log(num + 10)
//         setTimeout(() => {
//             num = 'ten'
//             console.log(num)
//         }, 3000)
//     }, 1000)
// }, 2000)

// console.log('Loading...')
//
// setTimeout(() => {
//     const product = {
//         name: 'Milk',
//         price: '$6'
//     }
//     console.log('1 step')
//     console.table(product)
//     setTimeout(() => {
//         product.price = '$8'
//         console.log('2 step')
//         console.table(product)
//     }, 3000)
// }, 1000)


// Promise

// console.log('Loading...')
//
// const promiseVariable = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Milk',
//             price: '$6'
//         }
//         console.log('1 step')
//         console.table(product)
//         resolve(product)
//         reject()
//     }, 2000)
// })
//
// const resolveData = (product) => {
//     setTimeout(() => {
//         product.price = '$8'
//         console.log('2 step')
//         console.table(product)
//     }, 1000)
// }
//
// const rejectData = () => {
//     return console.error('ERROR PROMISE IS NOT RESOLVED')
// }
//
// promiseVariable.then(resolveData, rejectData)

////////////////////////////////////////
//---2вариант---//

// console.log('Loading...')
//
// const promiseVariable = new Promise((resolve) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Milk',
//             price: '$6'
//         }
//         console.log('1 step')
//         console.table(product)
//         resolve(product)
//     }, 2000)
// })
//
// promiseVariable.then((product) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             product.soldOut = true
//             console.log('2 step')
//             console.table(product)
//             resolve(product)
//         }, 2000)
//     })
// }).then((product) => {
//     setTimeout(() => {
//         product.soldOut = false
//         product.price = '$10'
//         console.log('3 step')
//         console.table(product)
//     }, 4000)
// }).catch(() => {
//     return console.log('ERROR')
// }).finally(() => {
//     console.log('FINALLY')
// })

///////////////////////////////////////////////////

// fetch(), API
// https://jsonplaceholder.typicode.com/
// ////////----------//////////
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//////

// fetch('https://jsonplaceholder.typicode.com/todos/100')
//     .then((response) => (response.json()))
//     .then((data) => console.log(data))

/////
//--- Отправить другой метод запроса ---// Настраиваем fetch()
// fetch('https://jsonplaceholder.typicode.com/todos/100', {
//     method: "GET",
//     headers: {"Content-type" : "application/json"}
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))

///////////////////////////////////////////////////

// CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1

// const fetchData = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML = `
//             <p>${data.title}</p>
//             <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
//             <span>${data.id}</span>
//             `
//         })
// }

const fetchData = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `
    } catch (e) {
        return console.error('ERROR', e)
    }
}

btnNext.onclick = () => {
    count < 200 ? count ++ : count = 1
    fetchData(count)
}

btnPrev.onclick = () => {
    count > 1 ? count -- : count = 200
    fetchData(count)
}

fetchData(count)

//--Homework part2--//

const request = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then((data) => console.log(data))
}
request()

// lesson7
//////////////////////////////////////////////////
// WEATHER

const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'

const citySearch = () => {
    cityName.oninput = async (event) => {
        try {
            const response = await fetch(`${baseUrl}?q=${event.target.value}&appid=${apiKey}`)
            const data = await response.json()
            city.innerHTML = data?.name || 'Город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
        } catch (e) {
            console.log(e, 'ERROR')
        }

    }
}

citySearch()

// const citySearch = () => {
//     cityName.oninput = (event) => {
//         fetch(`${baseUrl}?q=${event.target.value}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 city.innerHTML = data?.name ? data.name : 'Город не найден...'
//                 temp.innerHTML = data?.main?.temp ? Math.round(data.main.temp - 273) + '&deg;C' : '...'
//                 // ?:)
//             })
//     }
// }
///
// http://api.openweathermap.org/data/2.5/weather
// e417df62e04d3b1b111abeab19cea714


