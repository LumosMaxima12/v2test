<template>
    <div class="app-container">
        <Layout>
            <template #left>
                <div class="aside">
                    <SiteAside />
                </div>
            </template>
            <template #default>
                <router-view>

                </router-view>
            </template>
        </Layout>
    </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
export default {
    components: {
        Layout,
        SiteAside,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
    .self-fill(fixed);
    background: #fff;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.aside {
    width: 250px;
    height: 100%;
}
</style>
