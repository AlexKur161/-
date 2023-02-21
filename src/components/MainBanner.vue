<template>
    <div class="hero">
            
                <HeroInfo
                title="Luxury homeware for people who love timeless design quality"
                txt="Shop the new Spring 2022 collection today"
                link="#"
                linkColor="#2A254B"
                linkBackground="#F9F9F9"
                colorTitle="#22202E"
                colorTxt="#5B5676"
                background="#FFFFFF"
                />
            
    </div>
</template>
<script setup>
import HeroInfo from './HeroInfo.vue'

</script>
<style lang="scss" scoped>
.hero {
position: relative;
padding-right: 80px;
background-image: url('/img/hero-bg.png');
background-size: cover;
height: 704px;
display: flex;
align-items: center;
justify-content: end;
}
</style>