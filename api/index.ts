import { Course, CourseReview, GetCourseReviewResponse } from "@/types/course";
import { ApiResponse } from "@/types/global";
import { METHOD } from "@/types/methods";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Api {
  baseURL: string;
  accessToken: string;
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;
    this.accessToken = "";
  }
  setToken = (token: string) => {
    this.accessToken = token;
  };

  getToken = () => {
    return this.accessToken;
  };

  initializeInstance = () => {
    let baseURL = this.baseURL;
    console.log("baseurl", baseURL);

    const instance = axios.create({
      baseURL,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
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

  getCourses = async (): Promise<any> => {
    const url = this.baseURL + "/course";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    return response.json();
  };

  getSingleCourse = async (id: string): Promise<any> => {
    const url = this.baseURL + `/course/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }
    return response.json();
  };

  forgotPassword = (data: { email: string }) => {
    const url = "/user/forgot-password";
    return this.publicRequest(url, METHOD.POST, data);
  };
  resetPassword = (
    token: string,
    data: { newPassword: string; confirmPassword: string }
  ) => {
    const url = `/user/reset-password/${token}`;
    return this.publicRequest(url, METHOD.PATCH, data);
  };

  getCourseReviews = async (courseId: string): Promise<any> => {
    const url = this.baseURL + `/course/reviews/${courseId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch course reviews");
    }

    return response.json();
  };

  addCourseReview = async (courseId: string, data: { review: string }) => {
    const url = `/course/reviews/${courseId}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to add course review");
    }

    return response.json();
  };
}

export default Api;
