<template>
    <div class="container">
        <Empty :text="'有内容了哈哈'"/>
    </div>
</template>

<script>
import Empty from "@/components/Empty/index";
export default {
    name: "test",
    components: {
        Empty,
    },
}
</script>

<style scoped>
.container {
    width: 300px;
    height: 200px;
    border: 1px solid;
    position: relative;
}
</style>