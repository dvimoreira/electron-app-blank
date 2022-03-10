import axios from 'axios'
import storage from '@/security/storage'

const API_HOST = process.env.API_HOST

/**
 * Objeto responsável por gerenciar o Token do usuário, ele gera um novo de acordo com os
 * dados do usuário e senha passados para API. Também fazer o refresh e gera o Authorization do header
 */
export default {
  accessToken (email, password) {
    return axios.post(`${API_HOST}/api/v1/auth/login`, { email: email, password: password })
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data
      })
  },
  refreshToken () {
    let refreshToken = storage.get('refreshtoken')
    return axios.post(`${API_HOST}/api/v1/auth/refresh-token`, { refresh_token: refreshToken })
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error.response.data
      })
  }
}
