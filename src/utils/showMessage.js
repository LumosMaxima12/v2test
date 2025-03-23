import getComponentRootDom from "@/utils/getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less"

/**
 * 弹出消息
 * @param options {Object} 包含以下内容
 *  content {String} 弹出消息内容
 *  type {String} 消息类型 : info error success warn
 *  duration {Number} 弹出框消失时间， 默认2000ms
 *  container {HTMLElement} 容器ref，消息会显示在容器正中，如果不传容器类型，消息则会显示在页面正中(body)
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
            type
    })
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    let typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;
    // 检查容器的position是否可以改动
    if(options.container && getComputedStyle(container).position === "static") {
        container.style.position = "relative";
    }
    container.appendChild(div)
    // 浏览器强行渲染
    div.clientHeight;

    //回归到正常位置
    div.style.opacity = "1";
    div.style.transform = `translate(-50%, -50%)`;

    setTimeout(() => {
        div.style.opacity = "0";
        div.style.transform = `translate(-50%, -50%) translateY(-25px)` ;
        div.addEventListener("transitionend", function () {
            div.remove();
            //运行回调函数
            options.callback && options.callback();

        }, {once: true})
    }, duration)
}