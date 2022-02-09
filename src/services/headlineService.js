import http from "./httpService";

export function getHeadlines() {
  return http.get("http://localhost:3000/api/headlines/");
}

export function getHeadline(id) {
  return http.get(`http://localhost:3000/api/headlines/${id}`);
}

export function deleteHeadline(id) {
  return http.delete(`http://localhost:3000/api/headlines/${id}`);
}

export function saveHeadline(headline) {
  const body = { ...headline };

  if (headline._id) {
    delete body._id;
    return http.put(
      `http://localhost:3000/api/headlines/${headline._id}`,
      body
    );
  }
  return http.post("http://localhost:3000/api/headlines/", headline);
}

export function saveLike(headline) {
  return http.put(
    `http://localhost:3000/api/headlines/like/${headline._id}`,
    headline
  );
}
