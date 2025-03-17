import { put, takeEvery } from "redux-saga/effects";
import { ICourseDto } from "../../models/course";
import { Course } from "../../services/course";
import {
  GET_COURSES,
  GET_COURSES_FAILURE,
  GET_COURSES_SUCCESS,
} from "../actions";

function* fetchCourses() {
  try {
    const response: ICourseDto = yield Course.getCourse();

    yield put({ type: GET_COURSES_SUCCESS, response });
  } catch (error) {
    yield put({ type: GET_COURSES_FAILURE, error });
  }
}

function* watchGetcourse() {
  yield takeEvery(GET_COURSES, fetchCourses);
}

export default watchGetcourse;
