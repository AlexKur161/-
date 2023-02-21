<template>
            <div class="product_wrap_item">
                <img :src="image" :alt="title">
                <h3 class="product_wrap_item_title">{{title}}</h3>
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
    color: #2A254B;
    margin-top: 24px;
    margin-bottom: 8px;
    }
    &_price {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #2A254B;
    }
}
</style>
