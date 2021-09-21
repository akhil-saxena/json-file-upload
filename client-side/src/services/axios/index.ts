import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "../../config";

axios.interceptors.request.use((axiosConfig) => {
  const BASE_URL = config.API_BASE;

  return {
    ...axiosConfig,
    baseURL: BASE_URL,
    withCredentials: true,
  };
});

axios.interceptors.response.use(
  (response) => response,
  (e) => {
    let error = e;
    if (!e.response) {
      error = {
        ...e,
        response: {
          data: {
            statusCode: 900,
            error: {
              message: "Network error. Please check your internet connection.",
            },
          },
        },
      };
    } else if (e.response.status === 401) {
      window.location.href = `${config.UI_BASE}/logout`;
    } else if (typeof e.response.data === "string") {
      error = {
        ...e,
        response: {
          ...e.response,
          originalData: e.response.data,
          data: { statusCode: 0, error: { message: "Something went wrong" } },
        },
      };
    }

    return Promise.reject({
      ...error,
      response: { ...error.response },
    });
  }
);

export default axios;

export interface IAxiosResponseError<T> {
  config: AxiosRequestConfig;
  request?: any;
  response: AxiosResponse<T>;
}
