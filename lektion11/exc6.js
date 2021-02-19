const app = {
    data() {
        return {
            paragraphs: ["en grej", "en annan grej", "en tredje"],
            people: [
                { name: "Bosse", job: "Bad coder", description: "He is always were we don't want him." },
                { name: "Lena", job: "BI Analyst", description: "One of our top analysts." },
            ]
        }
    }
}

let vueApp = Vue.createApp(app)
vueApp.mount("#app")
