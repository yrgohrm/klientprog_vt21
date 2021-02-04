const dateFormat = new Intl.DateTimeFormat("sv", {
  dateStyle: "short",
  timeStyle: "medium",
});

function updateTime() {
    let timepiece = document.getElementById("timepiece")
    const now = new Date();
    timepiece.innerText = dateFormat.format(now)

    let seconds = now.getSeconds();
    timepiece.style.borderColor = `rgb(0, 0, ${seconds*4%255})`
    timepiece.style.color = `rgb(${255-(seconds*4)}, 100, 100)`
}

setInterval(updateTime, 333)