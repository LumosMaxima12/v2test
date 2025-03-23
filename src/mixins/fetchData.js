// 公共的远程获取数据的代码
//
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                is_loading: true,
                data: defaultDataValue
            }
        },
        async created() { //具体组件中需要提供一个远程获取数据的方法  .eg: fetchData
            this.data = await this.fetchData();
            this.is_loading = false;
        },
    };
}