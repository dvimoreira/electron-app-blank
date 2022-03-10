import axios from 'axios'
import storage from '@/security/storage'
import store from '@/store'
import router from '@/router'

/**
 * Interceptor para verificar se existe um token gravado na Storage
 * e adicionar esse token junto ao cabeçalho em uma requisição para API
 */
axios.interceptors.request.use(
    (config) => {
        const token = storage.get('token', null)

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/**
 * Interceptor para verificar se o retorno da API veio com status 401 que
 * é com token expirado / token inválido ou sem token
 */
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            store.dispatch('logout').then((response) => {
                router.push({ name: 'auth.login' })
            }).catch((response) => {
                router.push({ name: 'auth.login' })
            })
        }
        return Promise.reject(error)
    }
)
