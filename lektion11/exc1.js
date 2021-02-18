const app = {
    data() {
        return {
            nisse: 'Hello World!',
            number: 3,
            bosse: { name: "Bosse Nilsson", age: 72 },
        }
    }
}

let vueApp = Vue.createApp(app)
vueApp.mount("#app")
