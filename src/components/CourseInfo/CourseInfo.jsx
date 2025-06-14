import "./CourseInfo.css";
import Button from "../../common/Button/Button";
import { getCourseDuration } from "../../helpers/getCourseDuration";
import { formatCreationDate } from "../../helpers/formatCreationDate";

export default function CourseInfo({
  coursesList,
  authorsList,
  showCourseId,
  onBack,
}) {
  const course = coursesList.find((c) => c.id === showCourseId);
  if (!course) return null;

  const authorNames = course.authors
    .map((aId) => authorsList.find((a) => a.id === aId)?.name)
    .filter(Boolean)
    .join(", ");

  return (
    <section className="course-info">
      <h2 className="course-info__title">{course.title}</h2>
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
            <strong>Authors:</strong> {authorNames}
          </p>
        </div>
      </div>
      <div className="course-info__back">
        <Button buttonText="BACK" handleClick={onBack} />
      </div>
    </section>
  );
}
