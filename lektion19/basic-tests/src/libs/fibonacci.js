function fib(n) {
    let n1 = 0,
        n2 = 1,
        nn = 1

    for (let i = 1; i < n; ++i) {
        nn = n1 + n2
        n1 = n2
        n2 = nn
    }

    return nn
}

export { fib }
