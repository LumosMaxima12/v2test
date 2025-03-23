<template>
    <i class = "iconfont" :class="fontClass"></i>
</template>

<script>
const classMap = {
    home: "iconzhuye",
    success: "iconzhengque",
    error: "iconcuowu",
    close: "iconguanbi",
    warn: "iconjinggao",
    info: "iconxinxi",
    blog: "iconblog",
    empty: "iconempty",
    code: "iconcode",
    about: "iconset_about_hov",
    weixin: "iconweixin",
    mail: "iconemail",
    github: "icongithub",
    qq: "iconsign_qq",
    arrowUp: "iconiconfonticonfonti2copy",
    arrowDown: "iconiconfonticonfonti2",
    chat: "iconliuyan",
}
export default {
    name: "icon",
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        fontClass() {
            return classMap[this.type];
        }
    }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
    color: inherit;
    font-size: inherit;
}
</style>