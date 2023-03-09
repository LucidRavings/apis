
// const baseURL = "https://swapi.dev/api/"

const button1 = document.querySelector("#get-residents-button")
function clickButton1() {
    axios.get(`https://swapi.dev/api/planets/?search=Alderaan`).then((res) => {
        console.log(res.data.results[0].residents)
        let residentsArr = res.data.results[0].residents
        for (i = 0; i < residentsArr.length; i++){
            axios.get(residentsArr[i]).then((res) => {
                let element = document.createElement('h2')
                element.textContent = res.data.name
                document.body.appendChild(element)
            })
        }

    })
}

button1.addEventListener('click', clickButton1)