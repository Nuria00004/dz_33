const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const prev = document.querySelector('.btn-prev')
let num = 0;
let rezalts = []
const zaproc =async () =>
{
    try{
        const getData = async () => response = ((await fetch('https://jsonplaceholder.typicode.com/todos')).json())
        const request = await getData()
                // console.log(json[1])
                // console.log(json[num])
                for (let elem of request) {
                    rezalts.push(elem)
                }
                // console.log(rezalts,"rezalts")
                block.innerHTML = `
                <div class="card">
                    <h3>${request[num].title}</h3>
                    <h3>${request[num].completed}</h3>
                    <h3>${request[num].id}</h3>
                </div> 
            `

    }
    catch {
        console.log("error")
    }
}
btn.onclick = () =>
{
    if (num < 200) {
        num++;
        block.innerHTML = `
                <div class="card">
                    <h3>${rezalts[num].title}</h3>
                    <h3>${rezalts[num].completed}</h3>
                    <h3>${rezalts[num].id}</h3>
                </div> 
            `}
}
prev.onclick = () =>
{
    if (num > 0) {
        num--
        block.innerHTML = `
            <div class="card">
                <h3>${rezalts[num].title}</h3>
                <h3>${rezalts[num].completed}</h3>
                <h3>${rezalts[num].id}</h3>
            </div> 
        `
    }
}
zaproc()
const zaproc2 = () =>
{
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then((json) => console.log('зарос 2\n', json))
}
zaproc2()