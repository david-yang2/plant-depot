import apiFetch from "./apiFetch"

// POST - /users
//   body: { username, password }
export const createUser = ({username, password}) => apiFetch("POST", "/users", {
    username,
    password
})