import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images.jpg";
import { searchCourse } from "../store/actionsCreator";

const Header = () => {
  const dispatch = useDispatch();
  //search handel
  const searchQuery = useSelector((state: any) => state.searchQuery);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(searchCourse(value)); 
  };

  return (
    <div className="px-2 w-full h-[60px] flex justify-between items-center row z-10 border-b-slate-400 sticky top-0 right-0 bg-blue-50">
      <div className="col-6 rounded-full">
        <img src={logo} alt="" className="w-[40px] h-[40px] rounded-full" />
      </div>
      <div className="col-6 flex justify-end">
        <input
          placeholder="Search By Course Title..."
          className="border-0 outline-0"
          onChange={handleSearch} 
          value={searchQuery}
        />
      </div>
    </div>
  );
};

export default Header;