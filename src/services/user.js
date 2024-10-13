import apiFetch from "./apiFetch";

// POST - /users
//   body: { username, password }
export const createUser = ({ username, password }) =>
  apiFetch("POST", "/users", {
    username,
    password,
  });

// POST - /users/session
//   body: { username, password }

export const createSession = ({ username, password }) =>
  apiFetch("POST", "/users/session", { username, password });
