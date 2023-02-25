<template>
    <div class="product">
        <div class="product_wrap">
            <Product
            v-for="element in products"
            :key="element.id"
            :image="element.image"
            :title="element.title"
            :price="element.price"
            />
        </div>
        <button class="hero_info_btn">View collection</button>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import Product from '@/components/Product.vue'

const products = ref([
    {
        id: 1,
        image: '/img/product-1.png',
        title: 'The Dandy chair',
        price: 250
    },
    {
        id: 2,
        image: '/img/product-2.png',
        title: 'Rustic Vase Set',
        price: 155
    },
    {
        id: 3,
        image: '/img/product-3.png',
        title: 'The Silky Vase',
        price: 125
    },
    {
        id: 4,
        image: '/img/product-4.png',
        title: 'The Lucy Lamp',
        price: 399
    },
])
</script>
<style lang="scss" scoped>
.product {
    padding: 30px 0 40px 0;
    &_wrap {
        display: flex;
        gap: 20px;
        justify-content: space-between;
    }
}
.hero_info_btn {
    background: #F9F9F9;
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--black);
    padding: 16px 32px;
    border: none;
    cursor: pointer;
    margin: auto;
    display: block;
    margin-top: 48px
}
</style>
