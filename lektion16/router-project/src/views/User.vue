<template>
    <div>{{ user.name }}</div>
    <div>{{ user.id }}</div>
    <div>{{ user.hobby }}</div>
</template>

<script>
import UserService from "../services/UserService"

export default {
    name: "User",
    props: ["userId"],
    data() {
        return {
            user: {},
        }
    },
    async created() {
        this.user = await UserService.getUser(this.userId)
    },
    watch: {
        async userId() {
            this.user = await UserService.getUser(this.userId)
        },
    },
}
</script>
