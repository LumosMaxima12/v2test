<template>
    <div class="container">
        <ContactMe />
    </div>
</template>

<script>
import ContactMe from "@/components/SiteAside/Contact/index";
export default {
    name: "test",
    components: {
        ContactMe,
    },

}
</script>

<style scoped>
.container {
    width: 400px;
    height: 400px;
    background: #000;
    margin: 10px auto;
    padding-top: 200px;
}
</style>