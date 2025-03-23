<template>
    <div class="container">
        <PageChange :total="total" :current="current" @pageChange="handleChangePage"/>
    </div>
</template>

<script>
import PageChange from "@/components/PageChange/index";
export default {
    name: "test",
    data() {
        return {
            total: 302,
            current: 3
        }
    },
    methods: {
        handleChangePage(newPage) {
            this.current = newPage;
            // todo 加载这一页的内容
        }

    },
    components: {
        PageChange,
    }
}
</script>

<style scoped>
.container {
    /*width: 500px;*/
    height: 200px;
    border: 1px solid;
    margin: 20px auto;
}
</style>