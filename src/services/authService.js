import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenkey = "token";

http.setJwt(getJwt()); // removing bidirectional dependency with httpservice

export async function login(email, password) {
  const { data: jwt } = await http.post(
    "https://handsome-blue-shoulder-pads.cyclic.app/api/auth",
    {
      email,
      password,
    }
  );
  localStorage.setItem(tokenkey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenkey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenkey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenkey);
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenkey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
