for (let i = 0; i < 5; ++i) {
    const p = document.createElement('p')
    p.innerText = `Detta är paragraf ${i+1}`

    document.body.appendChild(p)
}