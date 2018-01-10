const BASE_URL = 'http://localhost:3000';

export const Event = {
  create(params) {
    return fetch(
      `${BASE_URL}/api/v1/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json());
  },

  getAll () {
    return fetch(
      `${BASE_URL}/api/v1/events`
    ).then(res => res.json());
  },

  get(id) {
    return fetch(
      `${BASE_URL}/api/v1/events${id}`
    ).then(res => res.json());
  }
}
