import { ICourseDto } from "../models/course";
import { ADD_COURSE, DELETE_COURSE, GET_COURSES, SEARCH_COURSE } from "./actions";

export const getCourses = () => ({
    type: GET_COURSES,
  });
  
  export const addCourse = (course:ICourseDto) => ({
    type: ADD_COURSE,
    payload: course,
  });
  
  export const deleteCourse = (id:number) => ({
    type: DELETE_COURSE,
    payload: id,
  });
  export const searchCourse = (value: string) => ({
    type: SEARCH_COURSE,
    payload: value,
  });