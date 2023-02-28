<template>
    <button v-if="type === 'button'" :style="{background: background}" class="hero_info_btn">
        <slot />
    </button>
    <router-link v-else :to="to" :style="{background: background}" class="hero_info_btn">
        <slot />
    </router-link>
</template>

<script setup>
const props = defineProps({
    background: {
        type: String,
        default: '#F9F9F9'
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
<style scoped>
.hero_info_btn {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--black);
        position: absolute;
        bottom: 46px;
        padding: 16px 32px;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
</style>