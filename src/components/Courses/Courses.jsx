import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CourseCard from "./components/CourseCard/CourseCard";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import SearchBar from "./components/SearchBar/SearchBar";

import "./Courses.css";
import { mockedCoursesList, mockedAuthorsList } from "../../constants";

export function Courses({
  coursesList = mockedCoursesList,
  authorsList = mockedAuthorsList,
  onAddClick,
  handleShowCourse,
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = query.trim()
    ? coursesList.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.id.toLowerCase().includes(query.toLowerCase())
      )
    : coursesList;

  const showCourse = (id) =>
    handleShowCourse ? handleShowCourse(id) : navigate(`/courses/${id}`);

  return (
    <section className="courses">
      <SearchBar query={query} setQuery={setQuery} />

      <div className="courses__actions">
        <Link to="/courses/add" onClick={onAddClick}>
          <button className="btn btn-add">ADD NEW COURSE</button>
        </Link>
      </div>

      {filtered.length === 0 ? (
        <EmptyCourseList onAddClick={onAddClick} />
      ) : (
        filtered.map((course) => (
          <CourseCard
            key={course.id}
            data-testid="courseCard"
            course={course}
            authorsList={authorsList}
            onShowCourse={showCourse}
          />
        ))
      )}
    </section>
  );
}

export default Courses;
