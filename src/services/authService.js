import http from "./httpService";

export function login(email, password) {
  return http.post("https://ancient-island-05230.herokuapp.com/api/auth", {
    email,
    password,
  });
}
