<template>
    <div class="different">
        <h2 class="different_title">What makes our brand different</h2>
        <div class="different_wrap">
            <div v-for="(item, i) in AboutBrand" :key="i" class="different_wrap_item">
                <img :src="item.img">
                <h3 class="different_wrap_item_title">{{item.title}}</h3>
                <p class="different_wrap_item_txt">{{item.txt}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const AboutBrand = [
    {
    img: '/svg/delivery.svg',
    title: 'Next day as standard',
    txt: 'Order before 3pm and get your order the next day as standard'
    },
    {
    img: '/svg/checkmark.svg',
    title: 'Made by true artisans',
    txt: 'Handmade crafted goods made with real passion and craftmanship'
    },
    {
    img: '/svg/purchase.svg',
    title: 'Unbeatable prices',
    txt: 'For our materials and quality you won’t find better prices anywhere'
    },
    {
    img: '/svg/sprout.svg',
    title: 'Recycled packaging',
    txt: 'We use 100% recycled to ensure our footprint is more manageable'
    }        
]
</script>

<style lang="scss" scoped>
.different {
    padding: 80px 0;
    &_title {
        text-align: center;
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        color: #2A254B;
        margin-bottom: 36px;
    }
    &_wrap {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        &_item {
            background: #F9F9F9;
            padding: 46px;
            &_title {
                font-family: 'Clash Display';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 140%;
                color: #2A254B;
                margin: 12px 0;
            }
            &_txt {
                font-family: 'Satoshi';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #2A254B;
            }
        }
    }
}
</style>