import { auth, db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
export const PostCard = ({ post, toggle, setToggle }) => {
  const { title, description, author, id } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  async function handleDelete() {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setToggle(!toggle);
  }
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>

      <p className="control">
        <span className="author">{author.name}</span>
        {isAuth && author.id === auth.currentUser.uid && (
          <span className="delete" onClick={handleDelete}>
            <i className="bi bi-trash3"></i>
          </span>
        )}
      </p>
    </div>
  );
};
