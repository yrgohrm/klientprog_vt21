import { expect } from "chai"
import { fib } from "@/libs/fibonacci.js"

describe("fibonacci.fib()", () => {
    it("handles the first fibonacci number properly", () => {
        const result = fib(1)
        expect(result).to.equal(1)
    })
    it("handles the second fibonacci number properly", () => {
        const result = fib(2)
        expect(result).to.equal(1)
    })
    it("handles the 14:th fibonacci number properly", () => {
        const result = fib(14)
        expect(result).to.equal(377)
    })
})
