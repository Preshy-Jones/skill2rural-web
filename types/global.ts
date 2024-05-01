export enum UserType {
  EDUCATOR = "EDUCATOR",
  STUDENT = "student",
}

export interface ApiResponse<T> {
  message: string;
  data?: T;
}
