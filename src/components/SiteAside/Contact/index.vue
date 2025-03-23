<template>
    <ul class="contact-container">
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="home"></Icon>
                </div>
                <span>内容1</span>
            </a>
            <div class="pop">
                <div class="img"></div>
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="blog"></Icon>
                </div>
                <span>内容1</span>
            </a>
            <div class="pop">
                <div class="img"></div>
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="info"></Icon>
                </div>
                <span>内容1</span>
            </a>
            <div class="pop">
                <div class="img"></div>
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="home"></Icon>
                </div>
                <span>内容1</span>
            </a>
            <div class="pop">
                <div class="img"></div>
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    name: "ContactMe",
    components: {
        Icon,
    },
    props: {
        icon: {
            type: String,
            default: "hom"
        },
        url: {

        }
    }
}
</script>

<style lang = "less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/varColor.less";
.contact-container {
    list-style: none;
    padding: 20px;
    margin: 0;
    @itemHeight: 30px;
    li {
        font-size: 14px;
        height: @itemHeight;
        line-height: 30px;
        margin: 14px 0;
        color: @grey;
        position: relative;
        &:hover{
            .pop {
                transform: scaleY(1);
            }
        }
    }
    a {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .icon {
         width: 36px;
         font-size: 26px;
     }

    .pop {
        //display: none;
        transform: scaleY(0);
        position: absolute;
        background: #fff;
        left: 0;
        bottom: @itemHeight + 5px;
        padding:10px 15px;
        border-radius: 5px;
        transition: 0.3s;
        transform-origin: center bottom;
        .img {
            width: 140px;
            height: 140px;
            background: #fff;
        }

        &::after {
            position: absolute;
            content: "";
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            background: #fff;
            width: 8px;
            height: 8px;
            bottom: -4px;
        }
    }

}

</style>