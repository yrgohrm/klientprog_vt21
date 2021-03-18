<template>
    <div class="home">
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link :to="'/user/' + user.id">{{ user.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import UserService from "../services/UserService.js"

export default {
    name: "Home",
    data() {
        return {
            users: [],
        }
    },
    async created() {
        this.users = await UserService.getUsers()
    },
}
</script>
