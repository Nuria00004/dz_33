// console.log('k')
const name = document.querySelector('.name')
const age = document.querySelector('.age')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest() // создание запроса
    request.open('GET', 'data.json') // объявление метода запроса и указывание пути
    request.setRequestHeader("Content-type", "application/json") // указывание загаловка
    request.send() // отправка запроса
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        console.log(data)
        document.querySelector('.name_1').innerHTML = data[0].name
        document.querySelector('.age_1').innerHTML = data[0].age

        document.querySelector('.name_2').innerHTML = data[1].name
        document.querySelector('.age_2').innerHTML = data[1].age

        document.querySelector('.name_3').innerHTML = data[2].name
        document.querySelector('.age_3').innerHTML = data[2].age
    })
})
// const arr =[2,3,6]
// console.log(arr[2])
"{"
    "nur:1"
"}"
// JSON.stringify()
// JSON.parse()
// const nur ={
//     nur:1
// }
// nur.nur