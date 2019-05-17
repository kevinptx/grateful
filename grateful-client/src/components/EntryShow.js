import React from "react";
import CommentForm from "../containers/CommentForm";
import Comments from "../containers/Comments";
import { Link } from "react-router-dom";

const EntryShow = ({ entry }) => {
  return (
    <div className="EntryCard Show">
      <p>
        Content - <strong>{entry.content}</strong>
      </p>

      <p>
        Author - <strong>{entry.author}</strong>
      </p>
      <img className="entryImage" src={entry.img_url} alt="(no pic)" />
      <p>Votes: {entry.upvotes}</p>
      <CommentForm entry_id={entry.id} />
      <h4>Comments</h4>
      <Comments comments={entry.comments} />
      <p>
        <Link
          className="edit-link"
          id="edit-link"
          to={{
            pathname: `/entries/${entry.id}/edit`,
            state: { current_entry: { entry } }
          }}
        >
          Edit or Delete This Entry
        </Link>
      </p>
    </div>
  );
};
export default EntryShow;
