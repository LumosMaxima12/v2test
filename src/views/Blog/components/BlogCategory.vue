<template>
    <div class="blog-category-container">
        <h2>文章分类</h2>
        <RightList :list="list"/>
    </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import fetchData from "@/mixins/fetchData";
import {getBlogCategories} from "@/api/blog";

export default {
    name: "BlogCategory",
    mixins:[fetchData([])],
    components: {
        RightList
    },
    computed: {
        categoryId() {
            // console.log("categoryId = " + this.$route.params.categoryId)
            return +this.$route.params.categotyId || -1;
        },
        list() {
            const totalArticleCount = this.data.reduce((a, b) => a.articleCount + b.articleCount, 0)
            const result = [
                {name: "全部", id: -1, articleCount: totalArticleCount},
                ...this.data,
            ];
            return result.map((it) => ( {
                ...it,
                isSelected: it.id === this.categoryId,

            }));
        }
    },
    methods: {
        async fetchData() {
            return await getBlogCategories();
        }
    }
}
</script>

<style lang="less" scoped>
.blog-category-container {
    width: 300px;
    height: 100%;
    padding: 20px;
    background: lightblue;
    h2 {
        font-weight: bold;
        font-size: 1em;
        margin: 0;
    }
}
</style>