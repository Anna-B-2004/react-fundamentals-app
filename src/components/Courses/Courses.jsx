import { useState } from "react";
import CourseCard from "./components/CourseCard/CourseCard";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";
import SearchBar from "./components/SearchBar/SearchBar";
import "./Courses.css";

export default function Courses({ coursesList, authorsList, onShowCourse }) {
  const [query, setQuery] = useState("");

  const filtered = !query.trim()
    ? coursesList
    : coursesList.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.id.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <section className="courses">
      <SearchBar query={query} setQuery={setQuery} />
      {filtered.length === 0 ? (
        <EmptyCourseList />
      ) : (
        filtered.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            authorsList={authorsList}
            onShowCourse={onShowCourse}
          />
        ))
      )}
    </section>
  );
}
