const countAsString = prompt("Hur många paragrafer?")
let count = Number(countAsString)

console.log("count", count)

if (count > 10) {
    count = 10;
}

for (let i = 0; i < count; ++i) {
    const p = document.createElement('p')
    p.innerText = `Detta är paragraf ${i+1}`

    document.body.appendChild(p)
}