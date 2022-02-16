import http from "./httpService";

export function getHeadlines() {
  return http.get("https://ancient-island-05230.herokuapp.com/api/headlines/");
}

export function getHeadline(id) {
  return http.get(
    `https://ancient-island-05230.herokuapp.com/api/headlines/${id}`
  );
}

export function deleteHeadline(id) {
  return http.delete(
    `https://ancient-island-05230.herokuapp.com/api/headlines/${id}`
  );
}

export function saveHeadline(headline) {
  const body = { ...headline };

  if (headline._id) {
    delete body._id;
    return http.put(
      `https://ancient-island-05230.herokuapp.com/api/headlines/${headline._id}`,
      body
    );
  }
  return http.post(
    "https://ancient-island-05230.herokuapp.com/api/headlines/",
    headline
  );
}

export function saveLike(headline) {
  return http.put(
    `https://ancient-island-05230.herokuapp.com/api/headlines/like/${headline._id}`,
    headline
  );
}
