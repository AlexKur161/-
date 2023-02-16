<template>
    <div class="hero">
            <div class="hero_info">
                <h2 class="hero_info_title">Luxury homeware for people who love timeless design quality</h2>
                <p class="hero_info_txt">Shop the new Spring 2022 collection today</p>
                <button class="hero_info_btn">View collection</button>
            </div>
    </div>
</template>
<script setup>
// import {ref} from 'vue'

</script>
<style lang="scss" scoped>
.hero {
position: relative;
background-image: url('/img/hero-bg.png');
background-size: cover;
height: 704px;
display: flex;
align-items: center;
justify-content: end;
&_banner {
    position: absolute;
    width: 100%;
    display: block;
}
&_info {
    margin-right: 80px;
    background: #FFFFFF;
    position: relative;
    z-index: 2;
    max-width: 630px;
    min-height: 444px;
    padding: 48px 56px;
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
    &_btn {
        background: #F9F9F9;
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #2A254B;
        position: absolute;
        bottom: 46px;
        padding: 16px 32px;
        border: none;
        cursor: pointer;
    }
}


}
</style>