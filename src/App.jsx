import { useState } from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { mockedCoursesList, mockedAuthorsList } from "./constants";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <Header />
      {selectedId ? (
        <CourseInfo
          coursesList={mockedCoursesList}
          authorsList={mockedAuthorsList}
          showCourseId={selectedId}
          onBack={() => setSelectedId(null)}
        />
      ) : (
        <Courses
          coursesList={mockedCoursesList}
          authorsList={mockedAuthorsList}
          onShowCourse={setSelectedId}
        />
      )}
    </>
  );
}
