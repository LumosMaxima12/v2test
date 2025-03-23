<template>
<div class="site-aside-container">
        <Avatar img_url="https://oj.swust.edu.cn/upload/image/user/11095.jpg" />
    <Menu/>
    <Contact />
</div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
    name: "index",
    components: {
        Avatar,
        Menu,
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/varColor.less";
.site-aside-container {
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}
.avatar-container {
    margin: 0 auto;
}
</style>