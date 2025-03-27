<template>
    <div class="blog-category-container">
        <h2>文章分类</h2>
        <RightList :list="list" @select="handleSelect"/>
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
            return +this.$route.params.categoryId || -1;
        },
        limit() {
            return +this.$route.query.limit || 10;
        },
        list() {
            const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0)
            // console.log()
            const result = [
                {name: "全部", id: -1, articleCount: totalArticleCount},
                ...this.data,
            ];
            return result.map((it) => ( {
                ...it,
                isSelected: it.id === this.categoryId,
                aside: `${it.articleCount}篇`

            }));
        }
    },
    methods: {
        async fetchData() {
            return await getBlogCategories();
        },
        handleSelect(item) {
            const query = {
                page: 1,
                limit: this.limit,
            }
            if(item.id === -1) {
                this.$router.push({
                    name: "Blog",
                    query,
                })
            }
            else {
                this.$router.push({
                    name:"categoryBlog",
                    query,
                    params: {
                        categoryId: item.id,
                    }
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.blog-category-container {
    width: 300px;
    height: 100vh;
    padding: 0 20px 0 20px ;
    overflow-y: scroll;
    h2 {
        font-weight: bold;
        font-size: 1em;
        margin: 0;
    }
}
</style>