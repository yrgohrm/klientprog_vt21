<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>{{ myCount }}</h2>
        <counter @count-incremented="doStuffWhenCountIsIncremented" />
    </div>
</template>

<script>
import Counter from "./Counter.vue"

export default {
    name: "HelloWorld",
    components: {
        Counter,
    },
    props: {
        msg: String,
    },
    data() {
        return {
            myCount: 0,
        }
    },
    methods: {
        doStuffWhenCountIsIncremented(evt) {
            this.myCount = evt
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
</style>
