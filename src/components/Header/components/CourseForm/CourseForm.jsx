import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import AuthorItem from "./AuthorItem";
import { EMPTY_COURSE } from "../../constants";
import { mockedAuthorsList, mockedCoursesList } from "../../constants";

export default function CourseForm() {
  const [course, setCourse] = useState(EMPTY_COURSE);
  const [newAuthor, setNewAuthor] = useState("");
  const [authors, setAuthors] = useState(mockedAuthorsList);
  const nav = useNavigate();

  const addAuthor = () => {
    if (newAuthor.trim().length < 2)
      return alert("Імʼя автора занадто коротке");
    setAuthors([...authors, { id: Date.now().toString(), name: newAuthor }]);
    setNewAuthor("");
  };

  const addAuthorToCourse = (author) =>
    setCourse({ ...course, authors: [...course.authors, author] });

  const removeAuthorFromCourse = (id) =>
    setCourse({
      ...course,
      authors: course.authors.filter((a) => a.id !== id),
    });

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, description, duration, authors: list } = course;
    if (!title || !description || !duration || list.length === 0)
      return alert("Заповніть усі поля");
    mockedCoursesList.push({ ...course, id: Date.now().toString() });
    nav("/courses");
  };

  return (
    <section className="course-form">
      <h2>Course Edit/Create Page</h2>

      <form onSubmit={onSubmit}>
        <h3>Main Info</h3>;
        <Input
          label="Title"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
        />
        <Input
          label="Description"
          type="textarea"
          rows={4}
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />

        <h3>Duration</h3>
        <div className="duration">
          <Input
            label="Duration"
            value={course.duration}
            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          />
          <span>
            {(course.duration || 0).toString().padStart(2, "0")}:00 hours
          </span>
        </div>

        <h3>Authors</h3>
        <div className="authors__create">
          <Input
            label="Author Name"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <Button text="CREATE AUTHOR" onClick={addAuthor} type="button" />
        </div>

        <div className="authors__lists">
          <div className="authors__all">
            <h4>Authors List</h4>
            {authors.map((a) => (
              <AuthorItem
                key={a.id}
                author={a}
                onAdd={() => addAuthorToCourse(a)}
              />
            ))}
          </div>

          <div className="authors__course">
            <h4>Course Authors</h4>
            {course.authors.length === 0
              ? "Author list is empty"
              : course.authors.map((a) => (
                  <AuthorItem
                    key={a.id}
                    author={a}
                    isCourse
                    onDelete={() => removeAuthorFromCourse(a.id)}
                  />
                ))}
          </div>
        </div>

        <div className="course-form__actions">
          <Button text="CANCEL" type="button" onClick={() => nav("/courses")} />
          <Button text="CREATE COURSE" />
        </div>
      </form>
    </section>
  );
}
