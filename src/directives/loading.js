import loadingUrl from "@/assets/loading.svg"
import styles from "./loading.module.less"
// 判断el中是否有Loading 效果的 img元素
function isExistLoadingImg(el) {
    return el.querySelector("img[data-role=loading]")
}

function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

//导出指令的配置
export default function (el, binding) {
    // 根据 binding.value 的值， 决定创建或删除img元素
    const currentImg = isExistLoadingImg(el);
    if(binding.value) {
        //创建元素
        if(!currentImg) {
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }
    else {
        // 删除元素
        if(currentImg) {
            currentImg.remove();
        }
    }

}