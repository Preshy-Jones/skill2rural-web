export enum UserType {
  EDUCATOR = "EDUCATOR",
  STUDENT = "STUDENT",
}

export interface ApiResponse<T> {
  message: string;
  data?: T;
}

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  type: UserType;
  organisation: string;
  role: string | null;
  no_of_students_to_reach: number | null;
  work_with_maginalized_populations: boolean | null;
  profile_photo: string | null;
  createdAt: string;
  updatedAt: string;
}
