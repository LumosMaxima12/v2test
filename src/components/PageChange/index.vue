<template>
    <div class="pageChange-container" v-if="pageNumber > 1">
        <a @click="handleClick(1)" v-show="current !== 1">|&lt;&lt;</a>
        <a @click="handleClick(current - 1)" v-show="current !== 1">&lt;&lt;</a>
        <a v-for="(n, i) in pageLists" :key="i" @click="handleClick(n)" :class="{active: n === current}">{{ n }}</a>
        <a @click="handleClick(current + 1)" v-show="current !== pageNumber">&gt;&gt;</a>
        <a @click="handleClick(pageNumber)" v-show="current !== pageNumber">&gt;&gt;|</a>
    </div>

</template>

<script>
export default {
    name: "PageChange",
    props: {
        current: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 0,
        },
        limit: {
            type: Number,
            default: 10,
        },
        visibleNumber: {
            type: Number,
            default: 10,
        }
    },
    methods: {
        handleClick(newPage) {
            if(newPage === this.current) {
                return;
            }
            this.$emit("pageChange", newPage)
        }
    },

    computed: {
        pageNumber() {
            return Math.ceil(this.total / this.limit);
        },
        visibleMinNumber() {
            return Math.max(1, this.current - this.visibleNumber / 2)
        },
        visibleMaxNumber() {
            return Math.min(this.pageNumber, this.visibleMinNumber + this.visibleNumber - 1)
        },
        pageLists() {
            let list = [];
            for(let i = 0; i <= this.visibleNumber; ++ i) {
                if(i + this.visibleMinNumber > this.visibleMaxNumber) {
                    break;
                }
                list[i] = i + this.visibleMinNumber;
            }
            return list;
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/varColor.less";
.pageChange-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
        color: @primary;
        margin: 0 6px;
        cursor: pointer;
        &.disabled {
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active {
            color: @words;
            font-weight: bold;
        }
    }
}
</style>