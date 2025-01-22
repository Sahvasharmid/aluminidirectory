import React, { useState, useEffect } from "react";
import axios from "axios";
import style from './CreateEvent.module.css';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ courseName: "", description: "", duration: "", instructor: "" });
  const [editCourse, setEditCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://aluminidirectorybackend.onrender.com/getcourse");
        setCourses(response.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // Handle create course
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://aluminidirectorybackend.onrender.com/createcourse", newCourse);
      setCourses([...courses, response.data]);
      setNewCourse({ title: "", description: "", duration: "", instructor: "" });
      setShowModal(false);
    } catch (err) {
      console.error("Error creating course:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit course
  const handleEditCourse = (course) => {
    setEditCourse(course);
    setNewCourse({
      title: course.title,
      description: course.description,
      duration: course.duration,
      instructor: course.instructor,
    });
    setEditMode(true);
    setShowModal(true);
  };

  // Handle update course
  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`https://aluminidirectorybackend.onrender.com/updatecourse/${editCourse._id}`, newCourse);
      setCourses(courses.map((course) => (course._id === editCourse._id ? response.data : course)));
      setEditCourse(null);
      setShowModal(false);
    } catch (err) {
      console.error("Error updating course:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete course
  const handleDeleteCourse = async (courseId) => {
    setLoading(true);
    try {
      await axios.delete(`https://aluminidirectorybackend.onrender.com/deletecourse/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (err) {
      console.error("Error deleting course:", err);
    } finally {
      setLoading(false);
    }
  };

  // Open modal to create a new course
  const openCreateModal = () => {
    setNewCourse({ title: "", description: "", duration: "", instructor: "" });
    setEditMode(false);
    setShowModal(true);
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={openCreateModal}>
        Create New Course
      </button>

      {/* Modal for Create/Edit Course */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        aria-labelledby="modalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">{editMode ? "Edit Course" : "Create Course"}</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={editMode ? handleUpdateCourse : handleCreateCourse}>
                <div className="mb-3">
                  <label htmlFor="courseName" className="form-label">Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="instructor" className="form-label">Instructor</label>
                  <input
                    type="text"
                    className="form-control"
                    id="instructor"
                    value={newCourse.instructor}
                    onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ?   <div className="spinner-border spinner-border-sm text-light" role="status">
                        <span className="sr-only">Loading...</span>
                      </div> : editMode ? "Update Course" : "Create Course"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Course List */}
      <div className="container mt-5">
        <h3>Course List</h3>
        <div className={`table-responsive ${style.tableresp}`}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Instructor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.duration}</td>
                  <td>{course.instructor}</td>
                  <td style={{ display: "flex" }}>
                    <button className="btn btn-warning btn-sm" onClick={() => handleEditCourse(course)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteCourse(course._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseManagement;
