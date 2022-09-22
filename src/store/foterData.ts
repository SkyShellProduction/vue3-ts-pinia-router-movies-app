import { defineStore } from "pinia";
export const useFooterStore = defineStore('footer', {
    state: () => {
        return {
            footerData: {
                socialLinks: [
                    {
                        icon: '',
                        url: 'http://facebook.com'
                    },
                    {
                        icon: '',
                        url: 'http://twitter.com'
                    },
                    {
                        icon: '',
                        url: 'http://linkedin.com'
                    },
                    {
                        icon: '',
                        url: 'http://instagram.com'
                    },
                ],
                privacyLinks: [
                    {
                        name: 'Voice over and Subtitle',
                        url: '#!'
                    },
                    {
                        name: 'Media Center',
                        url: '#!'
                    },
                    {
                        name: 'Privacy',
                        url: '#!'
                    },
                    {
                        name: 'Contact us',
                        url: '#!'
                    },
                ],
                infoLinks: [
                    {
                        name: 'Help Center',
                        url: '#!'
                    },
                    {
                        name: 'Job Opportunities',
                        url: '#!'
                    },
                    {
                        name: 'Cookies Preferences',
                        url: '#!'
                    },
                ]
            }
        }
    }
});