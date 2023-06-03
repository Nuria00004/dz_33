// console.log('k')
const name = document.querySelector('.name')
const age = document.querySelector('.age')
const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     const request = new XMLHttpRequest() // создание запроса
//     request.open('GET', 'data.json') // объявление метода запроса и указывание пути
//     request.setRequestHeader("Content-type", "application/json") // указывание загаловка
//     request.send() // отправка запроса
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         console.log(data)
//         document.querySelector('.name_1').innerHTML = data[0].name
//         document.querySelector('.age_1').innerHTML = data[0].age
//
//         document.querySelector('.name_2').innerHTML = data[1].name
//         document.querySelector('.age_2').innerHTML = data[1].age
//
//         document.querySelector('.name_3').innerHTML = data[2].name
//         document.querySelector('.age_3').innerHTML = data[2].age
//     })
// })

const getData = async () => response = ((await fetch('data.json')).json())

btn.addEventListener('click',  async ()  => {
    try{
        const request = await getData()
        console.log(request)
            document.querySelector('.name_1').innerHTML = request[0].name
            document.querySelector('.age_1').innerHTML = request[0].age

            document.querySelector('.name_2').innerHTML = request[1].name
            document.querySelector('.age_2').innerHTML = request[1].age

            document.querySelector('.name_3').innerHTML = request[2].name
            document.querySelector('.age_3').innerHTML = request[2].age
    }
    catch{
        console.log('ERROR')}
})
