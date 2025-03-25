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
            <template v-if="route_name === 'Home'" #right>
                <div>
                    <div> 右边框 </div>
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/Layout";
import {useRoute} from "vue-router/composables";
import {computed} from "vue";
export default {
    components: {
        Layout,
        SiteAside,
    },
    data() {
        return {
            route_name: computed(() => useRoute().name),
            is_home: true,
        }
    },
}

</script>


//nvm use 16.13.2

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
