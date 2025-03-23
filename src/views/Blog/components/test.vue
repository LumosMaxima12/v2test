<template>
    <RightList :list="list" @select="handleSelect"/>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
export default {
    name: "test",
    components: {
        RightList,
    },
    data() {
        return {
            list: [
                {name: "shabi1", isSelected: false},
                {name: "shabi2", isSelected: false},
                {name: "shabi3", isSelected: false, children: [
                        {name:"subshabi1", isSelected: false, children: [
                                {name: "subsubshabi1", isSelected: false},
                                {name: "subsubshabi2", isSelected: true},
                                {name: "subsubshabi3", isSelected: false},
                            ]},
                        {name:"subshabi2", isSelected: false},
                        {name:"subshabi3", isSelected: false},
                    ]},
                {name: "shabi4", isSelected: false},
            ],
        };
    },
    methods: {
        handleSelect(item) {
            console.log(item)
        }
    }
}
</script>

<style scoped>

</style>