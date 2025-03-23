<template>
    <img
        class="avatar-container"
        :src="img_url"
        :style="{
            width: size + 'px',
            height: size + 'px'
        }"
        alt=""
    />
</template>

<script>
export default {
    props: {
        img_url: {
            type: String,
            required: true
        },
        size: {
            type: Number
        }
    }
}
</script>

<style scoped>
.avatar-container {
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>