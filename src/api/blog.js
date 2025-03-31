import request from "@/api/request";

/**
 * 获取博客列表
 * @param page
 * @param limit
 * @param categoryId
 * @returns {Promise<axios.AxiosResponse<any>>}
 */

export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryId,
        },
    });
}

/**
 * 获取博客分类
 * @returns {Promise<axios.AxiosResponse<any>>}
 */

export async function getBlogCategories() {
    return await request.get("/api/blogType");
}

export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param commentInfo
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment/${commentInfo}`);
}

export async function getComment(blogId, page = 1, limit = 10) {
    return await request.get("/api/comment", {
        params: {
            blogId,
            page,
            limit,
        },
    });
}