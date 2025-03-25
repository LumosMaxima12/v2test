<template>
<div>
    <Layout>
        <template #default>
            <BlogList />
        </template>
        <template #left>
            <BlogCategory />
        </template>
    </Layout>
    文章, {{this.$route.params}}
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
    created() {
        console.log(this.$route)
    }
}
</script>

<style lang="less" scoped>
.main-container {
    background: lightsteelblue;
}
.right-container {
    background: lightcyan;
}
</style>