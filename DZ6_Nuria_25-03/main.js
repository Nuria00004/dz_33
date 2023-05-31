const btn = document.querySelector('.btn')
const block = document.querySelector('.block')
const prev = document.querySelector('.btn-prev')
let num = 0;
let rezalts = []
const zaproc = () =>
{
    fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then((json) =>
        {
            console.log(json[num])
            for (let elem of json) {
                rezalts.push(elem)
            }

            console.log(rezalts);

            block.innerHTML = `
                <div class="card">
                    <h3>${json[num].title}</h3>
                    <h3>${json[num].completed}</h3>
                    <h3>${json[num].id}</h3>
                </div> 
            `
        })

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