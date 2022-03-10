<template>
    <div id="page-dashboard"></div>
</template>

<script>
    // import AuthService from '@/services/auth/auth'

    export default {
        name: 'dashboard',
        components: {},
        data () {
            return {}
        },

        methods: {
            msgNotification (messagem, possition, type) {
                this.$buefy.notification.open({
                    duration: 5000,
                    message: messagem,
                    position: possition,
                    type: type,
                    hasIcon: false
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/style.scss';

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
