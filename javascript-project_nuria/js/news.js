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
        img.src = 'data:image/png;base64,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'
        h2.innerText = item.title;
        h3.innerText = item.body;
        div.append(img, h2, h3);
        parent.append(div);
    });
}
renderNews();