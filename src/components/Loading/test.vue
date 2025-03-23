<template>
    <div  style="position: relative">
        <Loading v-show="is_loading" />
        <button @click="is_loading = !is_loading"> 切换显示/隐藏</button>
    </div>
</template>

<script>
import Loading from "@/components/Loading/index";
export default {
    name: "test",
    components: {
        Loading,
    },
    data() {
        return {
            is_loading: false,
        }
    }
}
</script>

<style scoped>

</style>