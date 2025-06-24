import "./CourseCard.css";
import Button from "../../../../common/Button/Button";

import trashIcon from "../CourseCard/Icon-Trash.png";
import editIcon from "../CourseCard/Edit.png";

import { getCourseDuration } from "../../../../helpers/getCourseDuration";
import { formatCreationDate } from "../../../../helpers/formatCreationDate";

export function CourseCard({ course, authorsList, onShowCourse = () => {} }) {
  const { id, title, description, duration, creationDate, authors } = course;

  const authorNames = authors
    .map((aId) => authorsList.find((a) => a.id === aId)?.name)
    .filter(Boolean)
    .join(", ");

  const baseDate = formatCreationDate(creationDate);
  const parts = baseDate.split(".");
  const prettyDate =
    parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : baseDate;

  return (
    <article className="course-card" data-testid="courseCard">
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
            <strong>Created:</strong> {prettyDate}
          </p>
        </div>

        <div className="course-card__actions">
          <Button text="SHOW COURSE" onClick={() => onShowCourse(id)} />

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

export default CourseCard;
