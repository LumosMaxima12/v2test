<template>
<div>
    <Layout>
        <template #default>
            <div class="main-container">
                <BlogList />
            </div>
        </template>
        <template #right>
            <div class="right-container">
                <BlogCategory />
            </div>
        </template>
    </Layout>
</div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/views/Blog/components/BlogList";
import BlogCategory from "@/views/Blog/components/BlogCategory";
export default {
    name: "index",
    components: {
        Layout,
        BlogList,
        BlogCategory,
    },
}
</script>

<style lang="less" scoped>
.main-container {
    height: 100vh;
}
.right-container {
    height: 100vh;
    width: 15vw;
//    background: red;
}
</style>