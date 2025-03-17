import { put, takeEvery } from "redux-saga/effects";
import {  DELETE_COURSE, DELETE_COURSE_FAILURE, DELETE_COURSE_SUCCESS } from "../actions";
import { ICourseDto } from "../../models/course";
import { Course } from "../../services/course";

function* deleteCourse(action:any) {
      try {
        const response: ICourseDto = yield Course.deleteCourse(action.payload);
    
        yield put({ type:DELETE_COURSE_SUCCESS, response });
      } catch (error) {
        yield put({ type:DELETE_COURSE_FAILURE, error });
      }
  }
  function* watchdeleteCourse() {
    yield takeEvery(DELETE_COURSE,deleteCourse);
  }
  
  export default watchdeleteCourse;
  