<template>
    <div>
        <button @click="incrementCounter">Öka!</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    emits: ["count-incremented"],
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        incrementCounter() {
            this.count++
            this.$emit("count-incremented", this.count)
        },
    },
}
</script>
