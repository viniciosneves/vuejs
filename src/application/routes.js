import { routes as auth } from './auth'
import { routes as dashboard } from './dashboard'
import { routes as costumers } from './costumers'

export default [ ...auth, ...dashboard, ...costumers ]
