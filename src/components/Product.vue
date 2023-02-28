<template>
            <div class="product_wrap_item">
                <router-link to="/">
                <img class="product_wrap_item_img" :src="image" :alt="title">
                </router-link>
                <router-link to="/" class="product_wrap_item_title">{{title}}</router-link>
                <p class="product_wrap_item_price">{{price}}</p>
            </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    
})
</script>

<style lang="scss" scoped>
.product_wrap_item {
    &_title {
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
    text-decoration: none;
    }
    &_img {
        max-height: 366px;
    }
    &_price {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--black);
    }
}
</style>
