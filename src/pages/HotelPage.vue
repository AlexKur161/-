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
                                            <div class="wrap_atr">
                                                <div class="wrap_atr_item">
                                                    <p>{{product.stars}} звезд</p>
                                                </div>
                                                <div class="wrap_atr_item">
                                                    <p>{{product.type}}</p>
                                                </div>
                                                <div class="wrap_atr_item">
                                                    <p>{{product.reviews_amount}} отзывов</p>
                                                </div>
                                            </div>
                                            <button class="like_btn">В закладки</button>
                                        </div>
                                        <div class="wrap_price">
                                            <div>
                                                <p class="price_discription">{{product.min_price}} ₽</p>
                                                <p class="sut_discription">за сутки</p>
                                            </div>
                                            <div>
                                                <button class="favorites_btn">В избранные</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="title_info">Полная информация</h3>
                                <p class="txt_info">{{product.description}}</p>
                                <h3 class="title_info">Комфорт</h3>
                                <ul>
                                    <li v-for="(li, i) in product.comfort" :key="i">{{li}}</li>
                                </ul>
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
        .title_info{
            margin-top: 40px;
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 18px;
            line-height: 110%;
            color: #000000;
        }
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
            max-width: 650px;
            .wrap_title_price{
                display: flex;
                justify-content: space-between;
                .wrap_price{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-end;
                }
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
                .price_discription{
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 30px;
                    color: #2A254B;
                }
                .sut_discription{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: #7A7F86;
                    text-align: end;
                    margin-top: 5px;
                }
                .wrap_atr{
                    display: flex;
                    gap: 20px;
                    &_item{
                        background: #F8F8F8;
                        border-radius: 18px;
                        padding: 8px 14px;
                        min-width: 60px;
                        margin-top: 15px;
                        p{
                            text-align: center;
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 17px;
                            color: #686868;
                        }
                    }
                }
                .like_btn{
                    background: rgba(235, 87, 87, 0.1);
                    border-radius: 22px;
                    border: none;
                    padding: 9px 30px;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 17px;
                    color: #EB5757;
                    cursor: pointer;
                    margin-top: 15px;
                }
                .favorites_btn{
                    background: rgba(235, 87, 87, 0.1);
                    border-radius: 22px;
                    border: none;
                    padding: 9px 30px;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 17px;
                    color: #EB5757;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>