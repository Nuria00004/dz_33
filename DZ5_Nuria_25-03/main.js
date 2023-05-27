const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eu = document.querySelector("#eu");
const convert = (elem, target, target2) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.onload = () => {
            const data = JSON.parse(request.response);
            console.log(data)
            if (elem === som) {
                target.value = (elem.value / data.usd).toFixed(2);
                target2.value = (elem.value / data.eu).toFixed(2);
            } else if (elem === usd) {
                target.value = (elem.value * data.usd).toFixed(2);
                target2.value = (target.value / data.eu).toFixed(2);
            } else if (elem === eu) {
                target.value = (elem.value * data.eu).toFixed(2);
                target2.value = (target.value / data.usd).toFixed(2);
            }
            elem.value === "" && (target.value = "");
            elem.value === "" && (target2.value = "");
        };
    };
};
convert(som, usd, eu);



convert(usd, som, eu);
convert(eu, som, usd);