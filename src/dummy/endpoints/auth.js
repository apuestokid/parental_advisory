import { v4 as uuidv4 } from 'uuid'

const validUser = {
  email: 'zeus@llyc.global',
  password: 'Str0ng!Passw0rd2024$',
}
export default async request => {
  await new Promise(resolve => setTimeout(resolve, 100))
  if (request?.data?.email !== validUser.email) {
    const error = new Error('Invalid email')
    error.status = 401
    throw error
  }
  if (request?.data?.password !== validUser.password) {
    const error = new Error('Invalid password')
    error.status = 401
    throw error
  }
  const token = uuidv4()
  return {
    token,
  }
}
