import { all } from "redux-saga/effects";
import watchGetcourse from "./watches/getCourse";
import watchSAddCourse from "./watches/addCouses";
import watchdeleteCourse from "./watches/deleteCourse";


 function* Saga() {
   yield all([
     watchGetcourse(),
     watchSAddCourse(),
     watchdeleteCourse()

  ])
}
export default Saga;