<template>
    <div :style="{ 'background-image': 'url('+ imgSrc + ')' }" class="banner-wrap">
        <div class="container">
            <div class="wrap_title">
                    <h2 class="banner-wrap-title">{{namePage}}</h2>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        imgSrc:{
            type: String,
            required: true
        },
        namePage:{
            type: String,
            required: true
        }
    }
    
}
</script>
<style lang="scss" scoped>
.banner-wrap{
    background-image: url('/img/banner-catalog.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 50vh;
    width: 100%;
    .wrap_title{
        display: flex;
        align-items: flex-end;
        padding: 40px 0;
        height: 50vh;
    }
    &-title{
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 140%;
        color: #FFFFFF;
    }
}
</style>