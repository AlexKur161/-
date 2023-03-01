<template>
    <div class="started">
        <div class="started_wrap">
            <HeroInfo
            title="It started with a small idea"
            txt="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
            link="#"
            linkColor="grey"
            linkBackground="rgba(249, 249, 249, 0.15)"
            colorTitle="#FFFFFF"
            colorTxt="#FFFFFF"
            background="#2A254B"            
            />
            <div class="started_wrap_block">
                <img class="started_wrap_block_img" src="/img/idea.png" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import HeroInfo from '@/components/HeroInfo.vue' 
</script>

<style lang="scss" scoped>
.started {
    padding: 60px 0;
    &_wrap {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        &_block {
            width: 50%;
            &_img {
                height: 100%;
            }
        }
    }

}
</style>