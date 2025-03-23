<template>
    <div class="carousel-item-container" ref="outerContainer" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="innerContainer" :style="imagePosition" >
            <image-loader @load="this.showWords" :src="carousel.largeImg" :placeholder="carousel.midImg"/>
        </div>
        <div class="title" ref="title">{{carousel.title}}</div>
        <div class="description" ref="description">{{carousel.description}}</div>
    </div>
</template>

<script>
import imageLoader from "@/components/ImageLoader";
export default {
    name: "CarouselItem",
    props:["carousel"],
    components: {
        imageLoader,
    },
    data() {
        return {
            titleWidth: 0,
            descriptionWidth: 0,
            outerContainerSize: null, // 外容器的尺寸
            innerContainerSize: null, // 内层图片的尺寸
            mouseX: 0, // 鼠标的X坐标
            mouseY: 0, // 鼠标的Y坐标
        }
    },
    computed: {
        imagePosition() {
            if(!this.outerContainerSize || !this.innerContainerSize) {
                return;
            }
            const extraWidth = this.outerContainerSize.width - this.innerContainerSize.width; //多出的宽度
            const extraHeight = this.outerContainerSize.height - this.innerContainerSize.height; //多出的宽度
            const left = extraWidth * this.mouseX / this.outerContainerSize.width;
            const top = extraHeight * this.mouseY / this.outerContainerSize.height;
            return {
                transform: `translate(${left}px, ${top}px)`
            };
        },
        center() {
            return {
                x: this.outerContainerSize.width / 2,
                y: this.outerContainerSize.height / 2,
            }
        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descriptionWidth = this.$refs.description.clientWidth;
        this.setSize();

        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        window.addEventListener("resize", this.setSize)

    },
    destroyed() {
        window.removeEventListener("resize", this.setSize)
    },
    methods: {
        animateElement(ref, width) {
            if (!this.$refs[ref]) return;
            const element = this.$refs[ref];

            element.style.opacity = 1;
            element.style.width = "0";
            element.clientWidth; // 强制 Reflow 触发动画
            element.style.transition = "2s";
            element.style.width = width + "px";
        },
        showWords() {
            this.animateElement("title", this.titleWidth);
            this.animateElement("description", this.descriptionWidth);
        },
        setSize() {
            this.outerContainerSize = {
                width: this.$refs.outerContainer.clientWidth,
                height: this.$refs.outerContainer.clientHeight,
            }

            this.innerContainerSize = {
                width: this.$refs.innerContainer.clientWidth,
                height: this.$refs.innerContainer.clientHeight,
            }
        },
        handleMouseMove(e) {
            const rect = this.$refs.outerContainer.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        }
    },

}
</script>

<style lang="less" scoped>
@import "~@/styles/varColor.less";
.carousel-item-container {
    width: 100%;
    height: 100%;
    //background: @dark;
    color: #fff;
    position: relative;
    overflow: hidden;
}
.carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: -1;
    transition: 0.3s;
    left: 0;
    top: 0;
}
.title, .description {
    position: absolute;
    top: calc(50% - 30px);
    left: 30px;
    color: white;
    letter-spacing: 2px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5); // 文字四个方向描边
    opacity: 0;
    overflow: hidden;
    white-space: nowrap;
}

.title {
    font-size: 2em;
    top: calc(50% - 60px);
}

.description {
    font-size: 1.2em;
    top: 50%;
    color: lighten(@grey, 20%);
}
</style>