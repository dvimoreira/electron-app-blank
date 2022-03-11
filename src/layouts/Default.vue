<template>
    <div>        
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'authenticated',
        components: {},
        data () {
            return {}
        },
        computed: {
            authenticated () {
                return this.$store.state.authenticated || false
            },

            /**
            * Pegando os dados do usuário
            */
            user () {
                return this.$store.state.user
            },

            /**
            * Pegando name da página ativa
            */
            activeRoute () {
                return this.$route.name
            }
        },
        methods: {
            logout () {
                this.$store.dispatch('logout')
                this.$router.push({ name: 'auth.login' })
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/style.scss';

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
