<template>
    <ul class="right-list-container">
        <li v-for="(item, i) in list"  :key="i">
            <span :class="{selected: item.isSelected}" @click="handleClick(item)"> {{item.name}}</span>
            <span v-if="item.aside" class="aside" :class="{selected: item.isSelected}">{{item.aside}}</span>
            <RightList :list="item.children" @select="handleClick"/>
        </li>
    </ul>
</template>

<script>
export default {
    name: "RightList",
    props: {
        // [{name: "xxx", isSelected:true,  children:[ {name: "xxx, isSelected: false, children: [...] } ]}]
        list: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleClick(item) {
            if(!item.isSelected) {
                this.$emit("select", item)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/varColor.less";
.right-list-container {
    list-style: none;
    padding: 0;
    .right-list-container {
        margin-left: 1em;
    }
    li {
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        .selected {
            font-weight: bold;
            color: @warn;
        }
        span {
            cursor: pointer;
        }
    }
}

.aside {
    font-size: 12px;
    margin-left: 1em;
    color: @grey;
}
</style>