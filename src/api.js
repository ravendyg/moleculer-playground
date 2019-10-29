import { config } from './config';

const apiBase = `${window.location.protocol}//${config.API_HOST}/contacts`;

export const api = {
  async fetchContacts(page, size) {
    const start = size * page;
    const resp = await fetch(`${apiBase}?start=${start}&size=${size}`);
    const data = await resp.json();

    return data;
  },

  async createContact(name, email) {
    await fetch(`${apiBase}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
  },
};
