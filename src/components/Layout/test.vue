<template>
    <div class="container">
        <Layout>
            <template #left>
                <div class="left">
                    左边栏内容
                </div>
            </template>
            <template>
                <div class="main">
                    中间内容
                </div>
            </template>
            <template #right>
                <div class="right">
                    右边内容
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout/index";
export default {
    name: "test",
    components: {Layout}
}
</script>

<style lang="less" scoped>
.container {
    width: 1000px;
    height: 400px;
    border: 1px solid;
    margin: 10px auto;
}

.left {
    width: 200px;
    height: 100%;
    background: lightblue;
}
.main {
    width: 100%;
    height: 100%;
    background: lightcyan;
}
.right {
    width: 150px;
    height: 100%;
    background: lightgoldenrodyellow;
}
</style>