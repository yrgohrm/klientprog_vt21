import TestService from "../services/TestService.js"
import SubComponent from "./SubComponent.js"

export default {
  // here we declare all local components, this is preferred to global
  // components most of the time unless it is a very general and widely
  // used component (such as a button)
  components: {
    subComponent: SubComponent,
  },
  data() {
    return {
      string: "",
    }
  },
  created() {
    // we do this in created to initiate the web call and initialise the
    // app state before the application is mounted to the dom to set up
    // as much state we can as soon as possible
    TestService.getString().then((string) => (this.string = string))
  },
  template: `<div>{{string}}
                    <sub-component/>
                    <sub-component/>
                    <sub-component/>
               </div>`,
}
