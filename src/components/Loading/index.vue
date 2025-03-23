<template>
    <img class="loading-container" src="@/assets/loading.svg" alt="">
</template>

<script>
export default {
    name: "index"
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
    .self-center()
}

</style>