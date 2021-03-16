import _ from 'lodash'

window.addEventListener("load", () => {
    let div = document.getElementById("app")
    div.innerText = _.camelCase("Hejsan Världen")
})
