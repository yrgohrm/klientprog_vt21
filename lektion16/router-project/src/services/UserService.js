class User {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}

const users = [
    new User("Mike Loseke", 1),
    new User("Eliza Tom", 2),
    new User("Wang Xiu Ying", 3),
    new User("Mats Svensson", 4),
]

// map user id to hobby
const hobbies = {
    1: "Chess",
    2: "Trial",
    3: "Fishing",
    4: "Fencing",
}

const UserService = {
    async getUsers() {
        return users
    },
    async getUser(user_id) {
        user_id = Number(user_id)
        const userName = users.find((user) => user.id === user_id).name
        const hobby = hobbies[user_id]
        if (userName != null && hobby != null) {
            return { name: userName, hobby: hobby, id: user_id }
        }

        throw new Error("No such user")
    },
}

export default UserService
