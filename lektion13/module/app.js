import MyComponent from "./components/MyComponent.js"

const app = {
  // nothing here in this simple app
  // but data(), methods() etc of the main
  // application goes here
}

const vueApp = Vue.createApp(app)

// register global component with main app
vueApp.component("my-component", MyComponent)

// "mount" the app, i.e. place it in the dom
vueApp.mount("#app")
