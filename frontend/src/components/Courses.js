import React, { useState, useEffect } from "react";
import axios from "axios";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
    // Fetch courses from the API
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/courses");
        console.log("hello");
        setCourses(response.data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <>
      <div className="Courses-page">
        <div className="nav d-flex justify-content-between p-3 ">
          <div className="search d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              fill="currentColor"
              className="bi bi-search pt-2 search-input "
              viewBox="0 0 16 28"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search 8000+ tutorials"
              className="search-input"
            />
          </div>
          <div className="logo d-flex justify-content-center">
            <h5>freeCodeCamp</h5>(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-fire"
              viewBox="0 0 16 16"
            >
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
            </svg>
            )
          </div>
          <div>
            <button className="btn text-white">Menu</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-square"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
            </svg>
          </div>
        </div>
        <div className="body-section">
          <div className="main-body ">
            <div className="text-center ">
              <h4 className="my-5 ">Welcome to freeCodeCamp.org</h4>
              <p className="quote">
                " I have not failed. I've just found 10,000 "
              </p>
              <p className="quote"> ways that won't work.</p>
              <i className="writer">- Thomas A Edision</i>
            </div>
          </div>
          <div className=" courses">
            <div className="course-list">
              {courses.map((course) => (
                <div className="course" key={course._id}>
                  <i className={course.icon}></i>
                  <p className="px-3">{course.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
