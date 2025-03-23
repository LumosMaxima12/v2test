<template>
    <div class="container">
        <ImageLoader
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder = "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
            @load="handleImageLoaded"
        />
    </div>
</template>

<script>
import ImageLoader from "./";
export default {
    name: "test",
    components: {
        ImageLoader,
    },
    methods: {
        handleImageLoaded() {
            console.log("图片加载完成")
        }
    }
}
</script>

<style scoped>
.container {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid black;
    position: relative;
}
</style>