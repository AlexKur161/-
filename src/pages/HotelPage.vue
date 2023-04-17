<template>
    <Banner
            imgSrc='/img/banner-catalog.png'
            namePage='product.name'
    />
</template>
<script>
import { mapGetters, mapActions } from "vuex"
export default {
    data(){
        return {
            product: {}
        }
    },
    computed: {
        ...mapGetters([
            'HOTELS'
        ]),
        test () {
            
            return this.product
        }
    },
    methods: {
        ...mapActions([
            'GET_HOTELS'
        ])
    },
    async mounted(){
        await this.GET_HOTELS()
        this.product = this.HOTELS.find(item => item.id === this.$route.params.id)
    }
}
</script>
<style scoped>

</style>