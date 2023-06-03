const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eu = document.querySelector("#eu");
const convert = (elem, target, target2) => {
    elem.oninput =async () => {
        const getData = async () => response = ((await fetch('data.json')).json())
        const request = await getData()
            if (elem === som) {
                target.value = (elem.value / request.usd).toFixed(2);
                target2.value = (elem.value / request.eu).toFixed(2);
            } else if (elem === usd) {
                target.value = (elem.value * request.usd).toFixed(2);
                target2.value = (target.value / request.eu).toFixed(2);
            } else if (elem === eu) {
                target.value = (elem.value * request.eu).toFixed(2);
                target2.value = (target.value / request.usd).toFixed(2);
            }
            elem.value === "" && (target.value = "")
            elem.value === "" && (target2.value = "");
        };
};
convert(som, usd, eu);
convert(usd, som, eu);
convert(eu, som, usd);
