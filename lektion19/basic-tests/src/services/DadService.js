export default {
    async getJoke() {
        let resp = await fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        })
        let json = await resp.json()
        return json.joke
    },
}
