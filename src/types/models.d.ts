export type UserRole = "user" | "admin" | "coach" | "chef"

export type CurrentUser = {
  id: number?,
  email: string?,
  firstname: string?,
  lastname: string?,
  role: UserRole?,
  isLogged: boolean
}

export type Payload = {
  type, 
  id, 
  email, 
  isLogged,
  data,
  token
}

export type Headers = {
  'Content-Type': 'application/json',
  Authorization?: string
}

export type Params = {
  method: 'get' | 'post' | 'delete',
  headers: Headers,
  body: string
}

export type Error = string?