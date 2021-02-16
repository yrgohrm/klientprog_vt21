// const options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: 'json={"apa": "somepostdata"}',
// }

// fetch("/echo/json", options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((error) => console.error(error));

async function callWebService() {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: 'json={"apa": "somepostdata"}',
    }

    try {
        let response = await fetch("/echo/json", options)
        if (!response.ok) {
            throw new Error(response.status)
        }
        let json = await response.json()
        console.log(json)
    }
    catch (err) {
        console.error(err)
    }
}

callWebService()




const SomeService = {
    async get() {
        let response = await fetch("/some/api")
        let json = await response.json()

        // osv

        return true
    }
}
// res är ett Promise! det kommer i framtiden producera ett värde true
// val kommer att vara en boolean med värdet true
const res = SomeService.get()
res.then(val => console.log(val))
