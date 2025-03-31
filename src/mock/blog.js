import Mock from "mockjs"
import qs from "querystring"

Mock.mock("/api/blogType", "get", {
    code: 0,
    msg: "man!",
    "data|10-20": [
        {
            "id|+1": 1,
            name: "分类@id",
            "articleCount|0-300": 0,
            "order|+1": 1,
        }
    ]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
    const query = qs.parse(options.url)
    return Mock.mock({
        code: 0,
        msg: "manman!",
        data: {
            "total|2000-3000": 0,
            [`rows|${query.limit||10}`]: [{
                id:"@guid",
                title:"@ctitle(1, 50)",
                description: "@cparagraph(1,10)",
                category: {
                    "id|1-10": 0,
                    name: "分类@id",
                },
                "scanNumber|0-3000": 0,
                "commentNumber|0-300": 30,
                // "thumb|1":[Mock.Random.image("300x250", "#000", "#fff", "Random Image"), null],
                thumb:"https://picsum.photos/300/250",
                createDate: `@date('T')`,
            }],
        }

    })
})

Mock.mock(/^\/api\/blog\/[^/]+$/, "get", {
    code: 0,
    msg: "",
    date: {
        id:"1",
        title: "CORS跨域方案详解",
        category: {
            "id || 1-10": 1,
            name: "分类@id",
        },
        description: "@cparagraph(1, 10)",
        "scanNumber|0-10000": 0,
        "commentNumber|0-100": 0,
        createDate: "@date('T')",
        toc:[
            {name: "概述", anchor: "article-md-title-1"},
            {
                name
            }
        ],
        "thumb|1": [
            Mock.Random.image("300*250", "#000", "#fff", "Random Image"),
            null,
        ],
        htmlContent: `<h1>haha<h1>`
    }
})