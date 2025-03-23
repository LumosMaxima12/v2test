<template>
    <div class="empty-container">
        <Icon class="icon-container" type="empty"></Icon>
        <p class="text-font-size">{{text}}</p>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon,
    },
    props: {
        text: {
            type: String,
            default: "无数据",
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/varColor.less";
.empty-container {
    width: 100%;

    //height: 100%;
    min-height: 100px;
    .self-center();
    color: @grey;
    text-align: center;
}

.icon-container {
    font-size: 72px;
}
</style>