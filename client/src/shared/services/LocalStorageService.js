import { LOCAL_STORAGE_KEYS } from "../constants";

class LocalStorageService {
  static get accessToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken);
  }

  static set accessToken(accessToken) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, accessToken);
  }

  static clearItem(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken);
  }
}

export default LocalStorageService;
