import http from "./httpService";

export function register(user) {
  console.log(user);
  return http.post(" https://handsome-blue-shoulder-pads.cyclic.app/", {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    about: user.about,
    anime: user.anime,
    country: user.country,
  });
}
