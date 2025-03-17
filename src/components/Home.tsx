import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../store/actionsCreator";
import { ICourseDto } from "../models/course";
import { Spinner } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddModal from "../pages/addModal";
import DeleteModal from "../pages/deleteModal";
import MoreModal from "../pages/moreModal";

const Home = () => {
  const dispatch = useDispatch();
  const { courses, loading, error, searchQuery } = useSelector((state: any) => state.course); // Get searchQuery from the Redux store
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course: ICourseDto) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowDeleteModal = (courseId: number) => {
    setSelectedCourseId(courseId);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedCourseId(0);
    setShowDeleteModal(false);
  };

  const handleShowMoreModal = (description: string) => {
    setSelectedDescription(description);
    setShowMoreModal(true);
  };

  const handleCloseMoreModal = () => {
    setSelectedDescription("");
    setShowMoreModal(false);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center">Error: {error}</div>;
  }

  return (
    <div className="container py-10">
      <div className="w-full flex justify-end mb-10">
        <button
          className="bg-blue-600 text-white text-center w-[50px] h-[40px] flex justify-center items-center  btn-border"
          onClick={handleShowAddModal}
          title="Add Course" 

        >
          <BiPlus className="btn-icon" />
        </button>
      </div>
      <div className="row">
        {filteredCourses.map((item: ICourseDto) => {
          const description =
            item.description.length > 70
              ? `${item.description.substring(0, 70)}...`
              : item.description;

          return (
            <div key={item.id} className="col-md-4 mb-4 col-sm-12">
              <div className="card h-100 hover:translate-y-1.5 shadow-blue-200 transition-all duration-100">
                <div className="card-body">
                  <h2 className="card-title text-center">{item.title}</h2>
                  <p className="card-text">
                    {description}
                    {item.description.length > 70 && (
                      <button
                        onClick={() => handleShowMoreModal(item.description)}
                        className="text-blue-500 ml-1 focus:outline-none"
                      >
                        Show more
                      </button>
                    )}
                  </p>
                  <p>{item.duration}</p>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {item.instructor}
                  </h6>
                </div>
                <div className="flex justify-between items-center p-2">
                  <button
                    className="bg-cyan-50 text-red-500 text-center w-[30px] h-[30px] flex justify-center items-center"
                    onClick={() => handleShowDeleteModal(item.id)}
                    title="Delete Course" 
                  >
                    <RiDeleteBin6Line className="btn-icon" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AddModal show={showAddModal} handleClose={handleCloseAddModal} />
      <DeleteModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        courseId={selectedCourseId}
      />
      <MoreModal
        show={showMoreModal}
        handleClose={handleCloseMoreModal}
        description={selectedDescription}
      />
    </div>
  );
};

export default Home;