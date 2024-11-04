export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail_image: string;
  video_url: string;
  duration: number;
  progress: CourseProgress[];
  objectives: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseReview {
  id: number;
  rating: number;
  comment: string;
  courseId: number;
  userId: number;
  user: {
    id: number;
    name: string;
    email: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface CourseProgress {
  id: number;
  progressPercentage: number;
  lastWatchedTime: number;
  createdAt: Date;
  updatedAt: Date;
  courseId: number;
  userId: number;
}

export interface Certificate {
  id: number;
  userId: number;
  courseId: number;
  course: Course;
  gradeInPercentage: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: number;
  name: string;
  email: string;
  profile_photo: string;
}
export interface GetCourseReviewResponse {
  reviews: CourseReview[];
  averageRating: number;
  ratings: {
    rating: number;
    percentage: number;
  }[];
}

export interface GetUserEnrolledCourses {
  courses: Course[];
  number_of_completed_courses: number;
  total_courses_enrolled: number;
}

export interface GetUserCertificates {
  certificates: Certificate[];
  number_of_completed_courses: number;
  total_courses_enrolled: number;
}

export interface CourseQuestion {
  id: number;
  question: string;
  answer: number;
  courseId: number;
  options: string[];
  point: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetCourseQuestionResponse {
  questions: CourseQuestion[];
}

// export interface QuizResult {
//   questionId: number;
//   point: number;
//   correct: boolean;
// }

interface Result {
  point: number;
  correct: boolean;
}

export interface QuizResult {
  [questionId: string]: Result;
}
export interface SubmitQuizResponse {
  gradeInPercentage: number;
  passed: boolean;
}

export interface GetQuizResultResponse {
  id: number;
  courseId: number;
  userId: number;
  gradeInPercentage: number;
  createdAt: string;
  updatedAt: string;
}
