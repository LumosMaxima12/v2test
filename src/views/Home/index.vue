<template>
<div v-loading="is_loading" class="home-container" ref="container" @wheel="handleWheel">
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
        <icon type="arrowUp"/>
    </div>

    <ul class="carousel-container" :style="{marginTop}" @transitionend="handleTransitionEnd">
        <li v-for="item in data" :key="item.id">
            <CarouselItem :carousel="item"/>
        </li>
    </ul>
    <div v-show="index < data.length - 1" class="icon icon-down" @click="switchTo(index + 1)">
        <icon type="arrowDown"/>
    </div>

    <ul class="indicator">
        <li :class="{
            active: (i === index)
        }" v-for="(item, i) in data.length" :key="item.id" @click="switchTo(i)">

        </li>
    </ul>
</div>
</template>

<script>
import {getBanners} from "@/api/banner";
import CarouselItem from "@/views/Home/CarouselItem";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData";
export default {
    name: "index",
    mixins:[fetchData([])],
    components: {
        CarouselItem,
        Icon,
    },
    data() {
      return {
          index: 0, // 当前显示的是第几张轮播图
          containerHeight: 0, // 整个容器的高度
          switching: false, // 是否正在翻页
      };
    },
    mounted() {
        this.containerHeight = this.$refs.container.clientHeight;
        window.addEventListener("resize", this.handleResize);
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    computed: {
        marginTop() {
            return -this.index * this.containerHeight + "px";
        }
    },
    methods: {
        async fetchData() {
            return await getBanners();
        },
        switchTo(i) {
            this.index = i;
            console.log(this.index)
        },

        handleWheel(e) {
            if(this.switching) {
                return ;
            }
            if(e.deltaY < -5 && this.index > 0) { //向上滚动
                this.index = this.index - 1;
                this.switching = true;
            }
            else if(e.deltaY > 5 && this.index < this.data.length - 1) { //向下滚动
                this.index = this.index + 1;
                this.switching = true;
            }
        },
        handleTransitionEnd() {
            this.switching = false;
        },
        handleResize() {
            this.containerHeight = this.$refs.container.clientHeight;
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/varColor.less";
.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    ul {
        margin: 0;
        list-style: none;
        padding: 0;
    }
    .icon {
        font-size: 30px;
        color: @grey;
        .self-center();
        cursor: pointer;
        transform: translateX(-50%);

        @jump: 10px;
        @keyframes jump-up {
            0% {
                transform: translate(-50%, @jump);
            }
            50% {
                transform: translate(-50%, -@jump);
            }
            100%{
                transform: translate(-50%, @jump);
            }
        }

        @keyframes jump-down {
            0% {
                transform: translate(-50%, -@jump);
            }
            50% {
                transform: translate(-50%, @jump);
            }
            100%{
                transform: translate(-50%, -@jump);
            }
        }
        &.icon-down {
             top: auto;
             bottom: 20px;
             animation: jump-up 2s infinite;
         }
        &.icon-up {
            top: 20px;
            animation: jump-down 2s infinite;
        }
    }
    .indicator {
        .self-center();
        transform: translateY(-50%);
        left: auto;
        right: 20px;
        li {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: @words;
            cursor: pointer;
            margin-bottom: 10px;
            border: 1px solid #fff;
            box-sizing: border-box;
            transition: 0.5s;
            &.active {
                background: #fff;
            }
        }
    }
}
.carousel-container {
    transition: 500ms;
    width: 100%;
    height: 100%;
    li {
        width: 100%;
        height: 100%;
    }
}
</style>