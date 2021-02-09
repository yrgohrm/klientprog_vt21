function alertMe(evt) {
    alert("Du klickade!")
    console.log(evt)
}

window.addEventListener('load', () => {
    const btn = document.getElementById("btn")
    btn.addEventListener('click', alertMe)
    btn.addEventListener('click', () => console.log("hej hej hej"))
})
