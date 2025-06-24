import Button from "../common/Button/Button";

export default function AuthorItem({ author, isCourse, onAdd, onDelete }) {
  return (
    <div className="author-item">
      {author.name}
      {isCourse ? (
        <Button text="🗑" type="button" onClick={onDelete} />
      ) : (
        <Button text="➕" type="button" onClick={onAdd} />
      )}
    </div>
  );
}
