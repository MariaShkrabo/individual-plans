import LocalStorageService from "../services/LocalStorageService";

export const accessTokenInterceptor = (config) => {
  config.headers.Authorization = `Bearer ${LocalStorageService.accessToken}`;

  return config;
};
