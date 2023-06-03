// console.log('k')
const name = document.querySelector('.name')
const age = document.querySelector('.age')
const btn = document.querySelector('.btn')

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
