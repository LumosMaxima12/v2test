import Mock from "mockjs"

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "man!",
    data: [
        {
            id:"1",
            midImg:"https://images.mepai.me/app/reading/517923/2024-08-15/066bd725803ef2.jpg",
            largeImg:"https://images.mepai.me/app/reading/517923/2024-08-15/066bd725896650.jpg",
            title:"ASIAN STATE OF MIND1",
            description: "Description1"
        },
        {
            id:"2",
            midImg:"https://images.mepai.me/app/reading/517923/2024-08-15/066bd7258a8478.jpg",
            largeImg:"https://images.mepai.me/app/reading/517923/2024-08-15/066bd725913f70.jpg",
            title:"ASIAN STATE OF MIND2",
            description: "Description2"
        },
        {
            id:"3",
            midImg:"https://images.mepai.me/app/reading/517923/2024-08-15/066bd725966abb.jpg",
            largeImg:"https://images.mepai.me/app/reading/517923/2024-08-15/066bd7259a754a.jpg",
            title:"ASIAN STATE OF MIND3",
            description: "Description3"
        }
    ]
})

console.log("启动")