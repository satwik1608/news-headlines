import http from "./httpService";

export function getHeadlines() {
  return http.get("https://handsome-blue-shoulder-pads.cyclic.app/");
}

export function getHeadline(id) {
  return http.get(`https://handsome-blue-shoulder-pads.cyclic.app/${id}`);
}

export function deleteHeadline(id) {
  return http.delete(`https://handsome-blue-shoulder-pads.cyclic.app/${id}`);
}

export function saveHeadline(headline) {
  const body = { ...headline };

  if (headline._id) {
    delete body._id;
    return http.put(
      `https://handsome-blue-shoulder-pads.cyclic.app/${headline._id}`,
      body
    );
  }
  return http.post("https://handsome-blue-shoulder-pads.cyclic.app/", headline);
}

export function saveLike(headline) {
  return http.put(
    `https://handsome-blue-shoulder-pads.cyclic.app/like/${headline._id}`,
    headline
  );
}
