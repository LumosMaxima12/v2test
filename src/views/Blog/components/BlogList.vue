<template>
    <div v-loading="is_loading" class="blog-list-container">
        <ul>
            <li v-for="item in data.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <a href="">
                        <img :src="item.thumb" alt="item.title" title="item.title">
                    </a>
                </div>
            </li>
        </ul>
        <page-change />
    </div>
</template>

<script>
import PageChange from "@/components/PageChange";
import fetchData from "@/mixins/fetchData";
import {getBlogs} from "@/api/blog"
export default {
    name: "BlogList",
    mixins: [fetchData({})],
    components: {
        PageChange,
    },
    data() {
        return {

        }
    },
    methods: {
        async fetchData() {
            return await getBlogs()
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/varColor.less";
.blog-list-container {
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @grey;
    .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
    }
    img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
    }
}

.main {
    flex : 1 1 auto;
    h2 {
        margin: 0;
    }
}

.aside {
    font-size: 12px;
    color: @grey;
    span {
        margin-right: 15px;
    }
}
.description {
    margin: 15px 0;
    font-size: 14px;
}
</style>