<template>
    <div :style="{background: background}" class="hero_info">
                <h2 :style="{color: colorTitle}" class="hero_info_title">{{title}}</h2>
                <p :style="{color: colorTxt}" class="hero_info_txt">{{txt}}</p>
                <!-- <a :href="link" :style="{ color: linkColor, background: linkBackground }" class="hero_info_btn">View collection</a> -->
                <ButtonUi to="/" background="#F9F9F9" type="link">View collection</ButtonUi>
            </div>
</template>
<script setup>
import ButtonUi from "@/ui/ButtonUi.vue"
const props = defineProps({
    title: {
        type: String,
        required: false
    },
    txt: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    linkColor: {
        type: String,
        required: false
    },
    linkBackground: {
        type: String,
        required: false
    },
    colorTitle: {
        type: String,
        required: false
    },
    colorTxt: {
        type: String,
        required: false,
        default: '#5B5676'
    },
    background: {
        type: String,
        required: false
    }
})
</script>
<style lang="scss" scoped>
.hero_info {
    position: relative;
    z-index: 2;
    padding: 48px 56px;
    min-height: 444px;
    max-width: 630px;
    &_title {
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 140%;
        color: #22202E;
        max-width: 510px;
        margin-bottom: 20px;
    }
    &_txt {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #5B5676;
    }
    // &_btn {
    //     background: #F9F9F9;
    //     font-family: 'Satoshi';
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: 16px;
    //     line-height: 150%;
    //     color: var(--black);
    //     position: absolute;
    //     bottom: 46px;
    //     padding: 16px 32px;
    //     border: none;
    //     cursor: pointer;
    //     text-decoration: none;
    // }
}
</style>