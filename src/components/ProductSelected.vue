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
        <div class="product_collection">
            <ButtonUi color="white">View collection</ButtonUi>
        </div>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import ButtonUi from '@/ui/ButtonUi.vue'
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
    &_collection {
        display: flex;
        justify-content: center;
        margin-top: 48px
    }
}
</style>
