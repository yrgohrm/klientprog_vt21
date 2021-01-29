for (let i = 1; i <= 100; ++i) {
    const p = document.createElement('p')
    
    if (i % 3 === 0 && i % 5 === 0) {
        p.innerText = "Fizz Buzz"
    }
    else if (i % 3 === 0) {
        p.innerText = "Fizz"
    }
    else if (i % 5 === 0) {
        p.innerText = "Buzz"
    }
    else {
        p.innerText = String(i)
    }

    document.body.appendChild(p)
}