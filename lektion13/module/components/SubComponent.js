import TestService from "../services/TestService.js"

export default {
  name: "SubComponent",
  data() {
    return {
      num: 0,
    }
  },
  created() {
    // we do this in created to initiate the web call and initialise the
    // app state before the application is mounted to the dom to set up
    // as much state we can as soon as possible
    TestService.getNum().then((num) => (this.num = num))
  },
  template: `<span> {{num}} <span>`,
}
