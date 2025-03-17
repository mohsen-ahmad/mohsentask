import { ICourseDto } from "../models/course";
import {
  ADD_COURSE,
  CLEAR_MESSAGE,
  DELETE_COURSE,
  GET_COURSES,
  SEARCH_COURSE,
} from "./actions";

//actions craetors get courses

export const getCourses = () => ({
  type: GET_COURSES,
});

//actions craetors add courses

export const addCourse = (course: ICourseDto) => ({
  type: ADD_COURSE,
  payload: course,
});
//actions craetors delete courses

export const deleteCourse = (id: number) => ({
  type: DELETE_COURSE,
  payload: id,
});
//actions craetors search courses

export const searchCourse = (value: string) => ({
  type: SEARCH_COURSE,
  payload: value,
});
//actions craetors clear message in toast

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
