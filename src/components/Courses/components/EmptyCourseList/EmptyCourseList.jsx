import Button from "../../../../common/Button/Button";

export default function EmptyCourseList() {
  return (
    <div data-testid="emptyContainer">
      <p>Your course list is empty</p>
      <Button
        buttonText="Add new course"
        handleClick={() => {}}
        data-testid="addCourseBtn"
      />
    </div>
  );
}
