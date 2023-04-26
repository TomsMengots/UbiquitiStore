const API_BASE_PATH = "https://static.ui.com";

export class DevicesHttpService {
  #domain = `${API_BASE_PATH}/fingerprint/ui`;

  async get(path: string) {
    return fetch(`${this.#domain}/${path}.json`);
  }
}
