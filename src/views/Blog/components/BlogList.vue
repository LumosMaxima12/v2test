<template>
    <div v-loading="is_loading" ref="container" class="blog-list-container">
        <ul>
            <li v-for="item in data.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <a href="">
                        <img :src="item.thumb" :alt="item.title" :title="item.title">
                    </a>
                </div>
                <div class="main">
                    <a href="">
                        <h2>{{item.title}}</h2>
                    </a>
                    <div class="aside">
                        <span>日期：{{formatDate(item.createDate)}}</span>
                        <span>浏览：{{item.scanNumber}}</span>
                        <span>评论：{{item.commentNumber}}</span>
                        <a href="/article/category/8">{{item.category.name}}</a>
                    </div>
                    <div class="description">
                        {{item.description}}
                    </div>
                </div>
            </li>
        </ul>
        <page-change v-if="data.total" :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" :visible-number="10" @pageChange="handlePageChange"/>
    </div>
</template>

<script>
import PageChange from "@/components/PageChange";
import fetchData from "@/mixins/fetchData";
import {getBlogs} from "@/api/blog"
import {formatDate} from "@/utils";
export default {
    name: "BlogList",
    mixins: [fetchData({})],
    components: {
        PageChange,
    },
    computed: {
        routeInfo() {
            const categoryId = +this.$route.params.categoryId || -1; // -1时是获取所有分类
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            return {
                categoryId,
                page,
                limit,
            }
        }
    },
    methods: {
        formatDate,
        async fetchData() {
            return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId);
        },
        handlePageChange(newPage) {
            const query = {
                page: newPage,
                limit: this.routeInfo.limit
            }
            if(this.routeInfo.categoryId === -1) {
                this.$router.push({
                    name: "Blog",
                    query
                })
            }
            else {
                this.$router.push({
                    name:"Blog",
                    params: {
                        categoryId: this.routeInfo.categoryId,
                    }
                })
            }
        }
    },
    watch: {
        $route: {
            async handler() {
                // console.log()
                this.is_loading = true;
                this.$refs.container.scrollTop = 0;
                this.data = await this.fetchData();
                this.is_loading = false;
            }
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
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
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