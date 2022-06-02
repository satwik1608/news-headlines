import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenkey = "token";
export async function login(email, password) {
  const { data: jwt } = await http.post(
    "https://ancient-island-05230.herokuapp.com/api/auth",
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

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
};
