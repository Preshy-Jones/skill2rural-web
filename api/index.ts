import {
  Course,
  CourseReview,
  GetCourseReviewResponse,
  GetQuizResultResponse,
} from "@/types/course";
import { ApiResponse } from "@/types/global";
import { METHOD } from "@/types/methods";
import { handleErrorResponse } from "@/utils";
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

  getSingleCoursePublic = async (id: string): Promise<any> => {
    const url = this.baseURL + `/course/public/${id}`;
    const response = await fetch(url, {
      method: "GET",
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

  addCourseReview = async (
    courseId: string,
    data: { rating: number; comment: string }
  ) => {
    const url = this.baseURL + `/course/reviews/${courseId}`;
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

  getCourseQuestions = async (courseId: string): Promise<any> => {
    const url = this.baseURL + `/questions/question/${courseId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  };
  submitQuiz = async (
    courseId: string,
    data: {
      gradeInPercentage: number;
    }
  ): Promise<any> => {
    const url = this.baseURL + `/questions/quiz/${courseId}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  };

  getUserBestQuizResult = async (courseId: string): Promise<any> => {
    const url = this.baseURL + `/questions/quiz/best/${courseId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  };

  getCourseCertificate = async (courseId: string): Promise<any> => {
    const url = this.baseURL + `/questions/certificate/${courseId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  };

  getUserCertificates = async (): Promise<any> => {
    const url = this.baseURL + "/questions/certificate";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch course certificates");
    }

    return response.json();
  };

  updateCourseProgress = async (
    courseId: number,
    data: {
      current_time: number;
    }
  ): Promise<any> => {
    const url = this.baseURL + `/course-progress/${courseId}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update course progress");
    }

    return response.json();
  };

  getUsersEnrolledCourses = async (): Promise<any> => {
    const url = this.baseURL + "/course/enrolled";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch enrolled courses");
    }

    return response.json();
  };

  getUserSettings = async (): Promise<any> => {
    const url = this.baseURL + "/user/me";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    return response.json();
  };

  updateUser = async (data: FormData): Promise<any> => {
    const url = this.baseURL + "/user";
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        // "Content-Type": "multipart/form-data",
      },
      body: data,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return response.json();
  };

  changePassword = async (payload: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    const url = this.baseURL + "/user/change-password";

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.log("errorData", errorData);

      const errorMessages = errorData.message;

      if (typeof errorMessages === "string") {
        throw new Error(errorMessages);
      }

      throw new Error(errorMessages[0]);
    }
    return response.json();
  };
}

export default Api;
