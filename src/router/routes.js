import guestGuardRoutes from './guards/guestGuard.js'
import authGuardRoutes from './guards/authGuard.js'
import publicGuardRoutes from './guards/publicGuard.js'

export default (authGuard, guestGuard, publicGuard) => [
  ...guestGuard(guestGuardRoutes),
  ...authGuard(authGuardRoutes),
  ...publicGuard(publicGuardRoutes),
]
