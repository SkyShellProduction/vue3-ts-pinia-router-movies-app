<script setup lang="ts">
    import Logo from '@/components/UI/Logo.vue';
    import { useFooterStore } from '@/store/foterData';
    const footer = useFooterStore();
</script>
<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__logo">
                    <Logo />
                    <div class="footer__social">
                        <a :href="ico.url" class="footer__social-link" 
                            v-for="ico in footer.footerData.socialLinks" 
                            :key="ico.url" target="_blank">
                            <span class="icon-brand">{{ico.icon}}</span>
                        </a>
                    </div>
                </div>
                <div class="footer__lists">
                    <ul class="footer__list">
                        <li v-for="item in footer.footerData.privacyLinks" :key="item.name">
                            <a :href="item.url" class="footer__link">{{item.name}}</a>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <li v-for="item in footer.footerData.infoLinks" :key="item.name">
                            <a :href="item.url" class="footer__link">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>