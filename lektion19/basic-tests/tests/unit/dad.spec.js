import { expect } from "chai"
import fetchMock from "fetch-mock/es5/server"
import DadService from "@/services/DadService.js"

describe("DadService.js", () => {
    before(() => {
        fetchMock.get("https://icanhazdadjoke.com/", { joke: "not a joke" })
    })

    it("checks for a proper joke", async () => {
        let joke = await DadService.getJoke()
        expect(joke).to.equal("not a joke")
        expect(fetchMock.called("https://icanhazdadjoke.com/")).to.be.true
    })

    after(() => fetchMock.restore())
})
