import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/security/storage'
import JwtToken from '@/security/jwt-token'

Vue.use(Vuex)

const state = {
  user: storage.getObject('user', null),
  authenticated: storage.get('authenticated', false),
  token: storage.get('token', null),
  refreshtoken: storage.get('refreshtoken', null)
}

const mutations = {
  setUser (state, user) {
    state.user = user
    storage.setObject('user', state.user)
  },
  setAuthenticated (state, authenticated) {
    storage.set('authenticated', authenticated)
    state.authenticated = authenticated
  },
  setToken (state, token) {
    storage.set('token', token)
    state.token = token
  },
  setRefreshToken (state, refreshtoken) {
    storage.set('refreshtoken', refreshtoken)
    state.refreshtoken = refreshtoken
  }
}

const actions = {
  login (context, params) {
    context.commit('setAuthenticated', true)
    context.commit('setToken', params.token)
    context.commit('setRefreshToken', params.refreshToken)
  },
  user (context, params) {
    context.commit('setUser', params)
  },
  logout () {
    state.user = null
    state.authenticated = false
    state.token = null
    state.refreshtoken = null
    storage.remove('user')
    storage.remove('authenticated')
    storage.remove('token')
    storage.remove('refreshtoken')
  },
  refreshToken (context) {
    return JwtToken.refreshToken().then(response => {
      if (response && response.status) {
        context.commit('setToken', response.results.accessToken)
      }
      return response
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
