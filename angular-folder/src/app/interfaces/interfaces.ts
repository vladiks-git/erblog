export interface User {
  id?: number
  username: string
  surname: string
  email: string
  password: string
}

export interface LoginUser {
  email: string
  password: string
}
