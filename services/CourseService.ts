import { Course } from "../types/sections";

export class CourseService {
  static async getCourseByUrlParam(urlParam: string): Promise<Course> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/courses/url/${urlParam}`, {
      headers: {
        'x-api-key': import.meta.env.VITE_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch course data');
    }

    return response.json();
  }
}
