import http from "./httpService";

export function register(user) {
  console.log(user);
  return http.post(" https://ancient-island-05230.herokuapp.com/api/users", {
    name: user.username,
    email: user.email,
    password: user.password,
  });
}
