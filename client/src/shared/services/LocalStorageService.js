import { LOCAL_STORAGE_KEYS } from '../constants';

class LocalStorageService {

  static get accessToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken);
  }

  static set accessToken(accessToken) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, accessToken);
  }

  static get refreshToken() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken);
  }

  static set refreshToken(refreshToken) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.refreshToken, refreshToken);
  }

  static get expirationTime() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.expirationTime));
  }

  static set expirationTime(expirationTime) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.expirationTime, expirationTime);
  }

  static get keepMeLoggedIn() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.keepMeLoggedIn));
  }

  static set keepMeLoggedIn(keepMeLoggedIn) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.keepMeLoggedIn, keepMeLoggedIn);
  }

  static clearItem(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.refreshToken);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.expirationTime);
  }

};

export default LocalStorageService;
