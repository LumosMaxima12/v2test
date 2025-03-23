<template>
    <nav class="menu-container">
        <router-link :exact="item.exact" v-for="item in items" :key="item.link" :to="{name: item.name}">
            <div class="icon">
                <Icon :type="item.icon"/>
            </div>
            <span>{{item.title}}</span>
        </router-link>


    </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    name: "index",
    components: {
        Icon
    },
    data() {
        return {
            items: [
                {
                    name: "Home",
                    title:"首页",
                    icon:"home",
                    exact: true,
                },
                {
                    name: "Blog",
                    title:"文章",
                    icon:"blog",
                    exact: false,

                },
                {
                    name: "About",
                    title:"关于我",
                    icon:"about",
                    exact: true,
                },
                {
                    name: "Project",
                    title:"项目&效果",
                    icon:"code",
                    exact: true,
                },
                {
                    name: "Message",
                    title:"留言板",
                    icon:"chat",
                    exact: true,
                }
            ]
        }
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/varColor.less";
@import "~@/styles/global.less";
.menu-container {
    color: @grey;
    margin: 24px 0;
    a {
        padding:0 50px;
        display: block;
        display: flex;
        align-items: center;
        height: 45px;
        line-height: 45px;
        .icon {
            width: 24px;
        }
        &:hover {
            color: #fff;
        }
        &.router-link-exact-active {
            background: #2d2d2d;
        }
        &.router-link-active {
            background: #2d2d2d;
        }
    }
}
</style>