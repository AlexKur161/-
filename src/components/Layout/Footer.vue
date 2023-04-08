<template>
    <footer class="footer">
        <div class="container">
            <div class="footer_wrap">
                <div class="footer_wrap_mini">
                    <router-link to="/" class="footer_title">Avion</router-link>
                    <p class="link_footer_page">21 New York Street</p>
                    <p class="link_footer_page">New York City</p>
                    <p class="link_footer_page">United States of America</p>
                    <p class="link_footer_page">432 34</p>
                </div>
                <div class="footer_wrap_mini">
                    <h4 class="footer_title">Menu</h4>
                    <nav class="link_footer">
                        <router-link class="link_footer_page"
                        :to="linkFooter.path" 
                        v-for="(linkFooter, i) in menuFooter" 
                        :key="i">{{linkFooter.name}}
                        </router-link>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            menuFooter: [
                            {
                                name: 'Home',
                                path: '/'
                            },
                            {
                                name: 'Catalog',
                                path: '/'
                            },
                            {
                                name: 'About',
                                path: '/'
                            },
                            {
                                name: 'Contacts',
                                path: '/'
                            }
                        ]   
        }
    }
    
}
</script>
<style lang="scss" scoped>
.footer{
    background: #2A254B;
    padding: 56px 0;
    &_wrap{
        display: flex;
        gap: 100px;
    }
    .footer_title{
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 140%;
        color: #FFFFFF;
        text-decoration: none;
        margin-bottom: 16px;
        display: block;
    }
    .link_footer_page{
        display: block;
    }
    .link_footer_page{
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #FFFFFF;
        margin-bottom: 12px;
        text-decoration: none;
    }
}
</style>