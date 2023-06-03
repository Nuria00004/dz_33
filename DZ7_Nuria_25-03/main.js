// const parent = document.querySelector('.parent')
// const arr = [
//     {
//         id: 1,
//         title: 'nuria'
//     },
//     {
//         id: 2,
//         title: 'nuria02'
//     },
//     {
//         id: 3,
//         title: 'nuria03'
//     }
// ]
//
// // console.log(arr[0], arr[1])
//
// arr.map((item) => {
//     // console.log(item.id)
//     // console.log(item.title)
//     // parent.innerHTML =
//     const div = document.createElement("div")
//     const h1 =document.createElement("h1")
//     const h2 =document.createElement("h2")
//     parent.append(div)
//     div.append(h1)
//     div.append(h2)
//     h1.innerHTML = item.id
//     h2.innerHTML = item.title
// })
// const requestNews = async () => {
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'GET',
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // }).then((data) => data.json())
    //     .then((info)=> console.log(info))
    ////////////////////////////////////////////
    // try{
    //      const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     }
    //     )
    //     console.log(data.json())
    // }
    // catch{
    //     console.log('ERROR')
    // }
// }
// requestNews()
const data = async () => response = (await fetch('https://jsonplaceholder.typicode.com/posts')).json()

async function renderNews(){
    const news = await data();
    // console.log(news)
    const parent = document.querySelector('.parent');
    news.map((item) =>
    {
        const div = document.createElement('div');
        div.setAttribute('class','child_div')
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        img.src ='data:image/jpeg;base64,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'
        h2.innerText = item.title;
        h3.innerText = item.body;
        div.append(img, h2, h3);
        parent.append(div);
    });
}
renderNews();
