import request from "@/api/request";
export async function getBanners() {
    return await request.get("/api/banner");
}

getBanners().then((r) => {
    console.log(r);
});