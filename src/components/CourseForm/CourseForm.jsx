import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { getCourseDuration } from "../../helpers";
import {
  EMPTY_COURSE,
  mockedAuthorsList,
  mockedCoursesList,
} from "../../constants";
import "./CourseForm.css";

export function CourseForm({
  authorsList = mockedAuthorsList,
  createCourse,
  createAuthor,
}) {
  const navigate = useNavigate();

  const [course, setCourse] = useState({ ...EMPTY_COURSE });
  const [authors, setAuthors] = useState(authorsList);
  const [newAuthorName, setNewAuthorName] = useState("");

  const handleChange = (field) => (e) =>
    setCourse((c) => ({ ...c, [field]: e.target.value }));

  const formattedDuration = getCourseDuration(Number(course.duration) || 0);

  const addAuthor = () => {
    const name = newAuthorName.trim();
    if (name.length < 2) return alert("Імʼя автора занадто коротке");

    createAuthor && createAuthor(name);

    const newAuthor = { id: Date.now().toString(), name };
    setAuthors((a) => [...a, newAuthor]);
    setCourse((c) => ({ ...c, authors: [...c.authors, newAuthor.id] }));
    setNewAuthorName("");
  };

  const onAddAuthorToCourse = (id) => {
    setCourse((c) => ({
      ...c,
      authors: c.authors.includes(id) ? c.authors : [...c.authors, id],
    }));
  };

  const removeAuthorFromCourse = (id) => {
    setCourse((c) => ({
      ...c,
      authors: c.authors.filter((a) => a !== id),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, description, duration, authors: courseAuth } = course;
    if (!title || !description || !duration || courseAuth.length === 0) {
      return alert("Заповніть усі поля");
    }

    if (createCourse) {
      createCourse(course);
    } else {
      mockedCoursesList.push({
        ...course,
        id: Date.now().toString(),
        creationDate: new Date().toLocaleDateString(),
      });
      navigate("/courses");
    }
  };

  return (
    <section className="course-form">
      <div className="course-form__card">
        <h2 className="course-form__title">Course Edit/Create Page</h2>
        <form className="course-form__form" onSubmit={onSubmit}>
          {/* Main Info */}
          <div className="course-form__section">
            <h3>Main Info</h3>
            <Input
              label="Title"
              data-testid="titleInput"
              value={course.title}
              onChange={handleChange("title")}
            />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              data-testid="descriptionTextArea"
              rows={4}
              value={course.description}
              onChange={handleChange("description")}
            />
          </div>

          <div className="course-form__section">
            <h3>Duration</h3>
            <div className="duration-field">
              <Input
                label="Duration (min)"
                data-testid="durationInput"
                value={course.duration}
                onChange={handleChange("duration")}
              />
              <span className="duration-display">{formattedDuration}</span>
            </div>
          </div>

          <div className="course-form__section authors-section">
            <h3>Authors</h3>
            <div className="authors-create">
              <Input
                label="Author Name"
                data-testid="createAuthorInput"
                value={newAuthorName}
                onChange={(e) => setNewAuthorName(e.target.value)}
              />
              <Button
                text="CREATE AUTHOR"
                data-testid="createAuthorButton"
                onClick={addAuthor}
                type="button"
              />
            </div>
            <div className="authors-lists">
              <div className="authors-list">
                <h4>Authors List</h4>
                {authors.map((a) => (
                  <div key={a.id} className="author-item">
                    <span>{a.name}</span>
                    <Button
                      text="ADD"
                      data-testid="addAuthor"
                      onClick={() => onAddAuthorToCourse(a.id)}
                      type="button"
                    />
                  </div>
                ))}
              </div>

              <div className="course-authors">
                <h4>Course Authors</h4>
                {course.authors.length === 0 ? (
                  <p>Authors list is empty</p>
                ) : (
                  course.authors.map((id) => {
                    const author = authors.find((x) => x.id === id);
                    return (
                      <div
                        key={id}
                        className="author-item"
                        data-testid="authorItem"
                      >
                        <span>{author?.name}</span>
                        <Button
                          text="REMOVE"
                          onClick={() => removeAuthorFromCourse(id)}
                          type="button"
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          <div className="course-form__actions">
            <Button
              text="CANCEL"
              onClick={() => navigate("/courses")}
              type="button"
            />
            <Button
              text="CREATE COURSE"
              type="submit"
              data-testid="createCourseButton"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
export default CourseForm;
