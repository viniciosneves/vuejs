import { routes as core } from '../application'

const root = [
  { path: '/', redirect: 'dashboard' }
]

export default [
  ...root,
  ...core
]
