import { ICourseDto } from "../models/course";
import { api } from "./api";

//general calss contains functions that use in redux
export class Course {
  //function to get courses
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
  //function to add courses

  static async addCourse(values: ICourseDto): Promise<ICourseDto> {
    return await api
      .post("/courses", values)
      .then(function (response) {
        console.log("Course Added:", response.data);
        return response.data;
      })
      .catch(function (error) {
        throw error;
      });
  }
  //function to delete courses

  static async deleteCourse(id: number): Promise<void> {
    return await api
      .delete(`/courses/${id}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error("Error Delete:", error);
        throw error;
      });
  }
}
