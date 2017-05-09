import http from 'src/http'
import * as types from './mutations-types'

export const attemptLogin = (context, payload) => {
  // context.commit('setToken', 'xXx')
  http.get('http://uinames.com/api/?ext')
    .then(response => response.data)
    .then(data => {
      context.commit(types.setToken, data.email)
      context.commit(types.setUser, data)
    })
}
