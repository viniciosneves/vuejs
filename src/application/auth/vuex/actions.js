import http from 'src/http'

export const attemptLogin = (context, payload) => {
  // context.commit('setToken', 'xXx')
  http.get('http://uinames.com/api/?ext')
    .then(response => response.data)
    .then(data => {
      context.commit('setToken', data.email)
      context.commit('setUser', data)
    })
}
