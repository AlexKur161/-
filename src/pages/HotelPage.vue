<template>
    <div class="row">
            <Header/>
            <div class="content">
                <Banner
                        imgSrc='/img/banner-catalog.png'
                        :namePage='product.name'
                />
                <section class="info">
                    <div class="container">
                        <div class="info_wrap">
                            <div class="info_wrap_item">
                                <div class="discription_hotels">
                                    <div class="wrap_title_price">
                                        <div class="wrap_title">
                                            <h3 class="title_discription">{{product.name}}</h3>
                                            <div class="wrap_country_discription">
                                                <img src="/svg/country.svg" alt="count" class="img_country_discription">
                                                <p class="txt_country_discription">{{product.country}}</p>
                                            </div>
                                        </div>
                                        <div class="wrap_price">
                                            <p class="price_discription">{{product.min_price}} ₽</p>
                                            <p>За сутки</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="info_wrap_item info_wrap_form"></div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
    </div>
</template>
<script>
import Banner from "@/components/Banner.vue"
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import { mapGetters, mapActions } from "vuex"
export default {
    data(){
        return {
            product: {}
        }
    },
    components:{
        Banner,
        Header,
        Footer
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
<style lang="scss" scoped>
.info{
    padding: 80px 0;
    &_wrap{
        display: flex;
        justify-content: space-between;
        gap: 60px;
        &_form{
            background: #FFFFFF;
            box-shadow: 0px 20px 40px rgba(135, 124, 202, 0.15);
            border-radius: 10px;
            width: 400px;
            height: 500px;
        }
        .discription_hotels{
            background: #FFFFFF;
            box-shadow: 0px 20px 40px rgba(135, 124, 202, 0.15);
            border-radius: 10px;
            padding: 25px;
            .wrap_title_price{
                display: flex;
                justify-content: space-between;
                .title_discription{
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 100%;
                    color: #1E2123;
                    margin-bottom: 20px;
                }
                .wrap_country_discription{
                    display: flex;
                    gap: 10px;
                }
            }
        }
    }
}
</style>