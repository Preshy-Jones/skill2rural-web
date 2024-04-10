import { METHOD } from "@/types/methods";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Api {
  baseURL: string;
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;
  }

  initializeInstance = () => {
    let baseURL = this.baseURL;
    console.log(baseURL);

    const instance = axios.create({
      baseURL,
      withCredentials: false,
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      // },
    });

    instance.interceptors.request.use(
      (config: any) => {
        return config;
      },
      (error: any) => {
        console.log(error);

        return Promise.reject(error);
      }
    );

    return instance;
  };

  publicRequest = (url: string, method: string, data: any) => {
    const instance = this.initializeInstance();
    return instance({
      url,
      method,
      data,
    });
  };

  registerStudent = (payload: {
    email: string;
    password: string;
    name: string;
  }) => {
    const url = "/user";
    return this.publicRequest(url, METHOD.POST, payload);
  };

  registerEducator = (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    const url = "/user/educator";
    return this.publicRequest(url, METHOD.POST, data);
  };
}

export default Api;
