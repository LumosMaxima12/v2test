<template>
    <div class="container">
        <SiteAside />
    </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less"
export default {
    name: "test",
    components: {
        SiteAside,
    }
}
</script>

<style scoped>
.container {
    width: 250px;
    height: 500px;
    border: 1px solid;
    margin: 0 auto;

}
</style>