<script setup>
import Header from './components/Layout/Header.vue'
import MainBanner from './components/MainBanner.vue'
import BrandDifferent from './components/BrandDifferent.vue'
</script>

<template>

  <div class="container">
  <Header/>
  <MainBanner/>
  <BrandDifferent/>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/clash-display');
@import url('https://fonts.cdnfonts.com/css/satoshi');
.container{
  max-width: 1280px;
  margin: auto;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Satoshi', sans-serif;
}
img {
  max-width: 100%;
}
</style>
