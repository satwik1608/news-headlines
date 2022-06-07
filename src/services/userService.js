import http from "./httpService";

export function register(user) {
  console.log(user);
  return http.post(" https://ancient-island-05230.herokuapp.com/api/users", {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    about: user.about,
    anime: user.anime,
    country: user.country,
  });
}
