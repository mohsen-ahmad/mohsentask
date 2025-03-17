import { put, takeEvery } from "redux-saga/effects";
import { ADD_COURSE, ADD_COURSE_FAILURE, ADD_COURSE_SUCCESS } from "../actions";
import { ICourseDto } from "../../models/course";
import { Course } from "../../services/course";

function* addCourse(action:any) {
      try {
        const response: ICourseDto = yield Course.addCourse(action.payload);
    
        yield put({ type: ADD_COURSE_SUCCESS, response });
      } catch (error) {
        yield put({ type:ADD_COURSE_FAILURE, error });
      }
  }
  function* watchSAddCourse() {
    yield takeEvery(ADD_COURSE,addCourse);
  }
  
  export default watchSAddCourse;
  