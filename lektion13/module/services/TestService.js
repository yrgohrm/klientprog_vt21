// this is just a simple example of how to create a service object
// these examples only return simple data, but in a real app these
// would be calls to web services.
//
// That's why they are marked below as "async" to make it easier to just
// plug in a fetch() call instead.
const TestService = {
  async getString() {
    return "somestring"
  },
  async getNum() {
    return Math.random()
  },
}

// This method will make the object constant and makes sure
// we can't add properties or change its prototype
Object.freeze(TestService)

export default TestService
