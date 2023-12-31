export function fetchCharacterList() {
  return fetch(
    "https://disney_api.nomadcoders.workers.dev/characters"
  ).then((response) => response.json());
}

export function fetchDetail(id: number) {
  return fetch(
    `https://disney_api.nomadcoders.workers.dev/characters/${id}`
  ).then((response) => response.json());
}
