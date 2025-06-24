import "./CourseInfo.css";
import { useParams, Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import { getCourseDuration, formatCreationDate } from "../../helpers";
import { mockedCoursesList, mockedAuthorsList } from "../../constants";

export function CourseInfo({
  coursesList = mockedCoursesList,
  authorsList = mockedAuthorsList,
}) {
  const { courseId } = useParams();

  const course = coursesList.find((c) => c.id === courseId);

  if (!course) {
    return (
      <section className="course-info not-found">
        <p>Course not found</p>
        <Link to="/courses">BACK</Link>
      </section>
    );
  }

  const courseAuthorNames = course.authors
    .map((id) => authorsList.find((a) => a.id === id))
    .filter(Boolean);

  return (
    <section className="course-info" data-testid="courseInfo">
      <h1 className="course-info__title">{course.title}</h1>

      <div className="course-info__card">
        <div className="course-info__left">
          <h3>Description:</h3>
          <p>{course.description}</p>
        </div>

        <div className="course-info__right">
          <p>
            <strong>ID:</strong> {course.id}
          </p>
          <p>
            <strong>Duration:</strong> {getCourseDuration(course.duration)}
          </p>
          <p>
            <strong>Created:</strong> {formatCreationDate(course.creationDate)}
          </p>
          <p>
            <strong>Authors:</strong>
          </p>
          <ul>
            {courseAuthorNames.map((a) => (
              <li key={a.id}>{a.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="course-info__back">
        <Link to="/courses">
          <Button text="BACK" />
        </Link>
      </div>
    </section>
  );
}

export default CourseInfo;
