export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail_image: string;
  video_url: string;
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

export interface GetCourseReviewResponse {
  reviews: CourseReview[];
  averageRating: number;
  ratings: {
    rating: number;
    percentage: number;
  }[];
}
