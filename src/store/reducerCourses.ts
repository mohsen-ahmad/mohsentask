import { ICourseDto } from './../models/course';
import { ADD_COURSE, ADD_COURSE_SUCCESS, DELETE_COURSE, DELETE_COURSE_FAILURE, DELETE_COURSE_SUCCESS, GET_COURSES, GET_COURSES_FAILURE, GET_COURSES_SUCCESS, SEARCH_COURSE } from "./actions";

interface state{
    courses:ICourseDto[],
    loading:boolean,
    error:any,
    message?:string,
    searchQuery: string; 

}

  const initialState:state = {
    courses: [],
    loading: false,
    error: null,
    message:'',
    searchQuery: '',

  };
  
  const courseReducer = (state = initialState, action:any) => {
    console.log(action.response);
    
    switch (action.type) {
      case GET_COURSES:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_COURSES_SUCCESS:
        return {
          ...state,
          loading: false,
          courses: action?.response,
        };
      case GET_COURSES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case ADD_COURSE:
          return {
            ...state,
              loading:true,

          };
        case ADD_COURSE_SUCCESS:
          return {
            ...state,
            courses: [...state.courses, action.payload],
            loadinf:false,
            message:'add success'
          };
          case DELETE_COURSE:
            return {
              ...state,
                loading:true,
  
            };

          case DELETE_COURSE_SUCCESS:
            return {
              ...state,
              courses: state.courses.filter((course) => course.id !== action.payload),
              loadding:false,
              message:'delete success'
            };
            case DELETE_COURSE_FAILURE:
              return {
                ...state,
                  loading:false,
    
              };
              case SEARCH_COURSE:
                return {
                  ...state,
                    loading:false,
                    searchQuery: action.payload, 
      
                };
     
      default:
        return state;
    }
  };
  
  export default courseReducer;