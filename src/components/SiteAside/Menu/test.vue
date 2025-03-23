<template>
    <div class="container">
        <Menu/>
    </div>
</template>

<script>
import Menu from "@/components/SiteAside/Menu/index";
export default {
    name: "test",
    components: {
        Menu,
    }
}
</script>

<style scoped>
.container {
    width: 400px;
    height: 600px;
    border: 1px solid;
    background: #000;
    margin: 0 auto;
}
</style>