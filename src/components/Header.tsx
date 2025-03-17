import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images.jpg";
import { searchCourse } from "../store/actionsCreator";

const Header = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: any) => state.searchQuery); // Get the search query from the Redux store

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(searchCourse(value)); // Dispatch the search action with the query
  };

  return (
    <div className="px-2 w-full h-[60px] flex justify-between items-center row z-10 border-b-slate-400 sticky top-0 right-0 bg-amber-100">
      <div className="col-6 rounded-full">
        <img src={logo} alt="" className="w-[40px] h-[40px] rounded-full" />
      </div>
      <div className="col-6 flex justify-end">
        <input
          placeholder="Search By Course Title..."
          className="border-0 outline-0"
          onChange={handleSearch} // Call handleSearch on input change
          value={searchQuery} // Bind the input value to the search query
        />
      </div>
    </div>
  );
};

export default Header;