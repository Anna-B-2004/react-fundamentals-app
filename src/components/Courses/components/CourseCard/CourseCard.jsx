import "./CourseCard.css";
import Button from "../../../../common/Button/Button";

import trashIcon from "../CourseCard/Icon-Trash.png";
import editIcon from "../CourseCard/Edit.png";

import { getCourseDuration } from "../../../../helpers/getCourseDuration";
import { formatCreationDate } from "../../../../helpers/formatCreationDate";

export default function CourseCard({ course, authorsList, onShowCourse }) {
  const { id, title, description, duration, creationDate, authors } = course;

  const authorNames = authors
    .map((aId) => authorsList.find((a) => a.id === aId)?.name)
    .filter(Boolean)
    .join(", ");

  return (
    <article className="course-card">
      <div className="course-card__content">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">{description}</p>
      </div>

      <div className="course-card__aside">
        <div className="course-card__meta">
          <p>
            <strong>Authors:</strong> {authorNames}
          </p>
          <p>
            <strong>Duration:</strong> {getCourseDuration(duration)}
          </p>
          <p>
            <strong>Created:</strong> {formatCreationDate(creationDate)}
          </p>
        </div>

        <div className="course-card__actions">
          <Button
            buttonText="SHOW COURSE"
            handleClick={() => onShowCourse(id)}
          />
          <button className="course-card__icon-btn" aria-label="Delete course">
            <img src={trashIcon} alt="delete" />
          </button>

          <button className="course-card__icon-btn" aria-label="Edit course">
            <img src={editIcon} alt="edit" />
          </button>
        </div>
      </div>
    </article>
  );
}
