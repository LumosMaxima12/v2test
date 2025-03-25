//有真实数据后就可以把导入的相应的 mockjs注释掉 就不会把请求拦截在浏览器

import "./banner"
import "./blog"
import Mock from "mockjs";

Mock.setup({ // 模拟延迟
    timeout: '1000-2000'
})