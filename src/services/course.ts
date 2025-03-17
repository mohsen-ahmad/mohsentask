import { ICourseDto } from "../models/course";
import { api } from "./api";

export class Course {
  static async getCourse(): Promise<ICourseDto[]> {
    return await api
      .get("/courses")
      .then(function (response) {
        // console.log(response);
        return response?.data;
      })
      .catch(function (error) {
        // console.log(error);
        throw error; 
      });
  }

  static async addCourse(values: ICourseDto): Promise<ICourseDto> {
    console.log("Adding Course:", values);

    return await api
      .post("/courses", values) 
      .then(function (response) {
        console.log("Course Added:", response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error("Error Adding Course:", error);
        throw error; 
      });
  }

  static async deleteCourse(id: number): Promise<void> {
    console.log("Deleting Course with ID:", id);

    return await api
      .delete(`/courses/${id}`) 
      .then(function (response) {
        console.log("Course Deleted:", response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error("Error Deleting Course:", error);
        throw error;
      });
  }
}