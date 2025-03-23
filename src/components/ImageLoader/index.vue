<template>
    <div class="image-loader-container">
        <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="">
        <img @load="handleLoaded" class="origin" :src="src" alt="" :style="{opacity: originOpacity, transition: `${duration}ms`}">
    </div>
</template>

<script>
export default {
    name: "ImageLoader",
    props: {
        src: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 200,
        }
    },
    data() {
        return {
            originLoaded: false,
            everythingDone: false,
        }
    },
    computed: {

        // eslint-disable-next-line vue/return-in-computed-property
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        }
    },
    methods: {
        handleLoaded() {
            this.originLoaded = true;
            setTimeout(() => {
                this.everythingDone = true;
                this.$emit("load", this.src)
            }, this.duration);
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img {
        .self-fill();
        object-fit: cover;
    }
}

.placeholder {
    filter: blur(2vw);
}

</style>