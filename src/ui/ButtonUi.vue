<template>
    <button v-if="type === 'button'"
    :class="['btn',
    {'btn_grey' : color === 'grey',
    'btn_blue' : color === 'blue',
    'btn_white' : color === 'white'}]">
        <slot />
    </button>
    <router-link v-else :to="to"
    :class="['btn',
    {'btn_grey' : color === 'grey',
    'btn_blue' : color === 'blue',
    'btn_white' : color === 'white'}]">
        <slot />
    </router-link>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        required: false
    },
    type: {
        type: String,
        default: 'button'
    },
    to: {
        type: String,
        required: false
    }
})
</script>
<style lang="scss" scoped>
.btn {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        padding: 16px 32px;
        border: none;
        cursor: pointer;
        text-decoration: none;
        display: block;
        width: fit-content;
        &:hover {
            opacity: 0.8;
            transition: opacity 2s;
        }
        &_grey {
            background: rgba(249, 249, 249, 0.15);
            color: #fff;
        }
        &_blue {
            background: #2A254B;
            color: #fff;
        }
        &_white {
            background: #F9F9F9;
            color: var(--black);
        }
    }
    
</style>