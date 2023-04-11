<template>
    <div class="row">
        <div class="container">
            <Header/>
        </div>
        <div class="content">
            <Banner
            imgSrc='/img/mardan.jpg'
            namePage='Contacts'
            />
        </div>
        <Footer/>
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
export default {
    components:{
        Header,
        Footer,
        Banner
    }
}
</script>
<style lang="scss" scoped>

</style>