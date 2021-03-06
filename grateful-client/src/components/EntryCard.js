import React from "react";
import { NavLink } from "react-router-dom";
import VoteForm from "./VoteForm"


const EntryCard = props => {
  const url = `/entries/${props.entry.id}`;
  return (
    <div className="EntryCard">
      <NavLink to={url} exact>
        <p>
          <strong>Content:</strong> {props.entry.content}
        </p>
      </NavLink>

      <p>
        <strong>Author: </strong>
        {props.entry.author}
      </p>
      <img className="EntryImage" src={props.entry.img_url} alt="(no pic)" />
      <VoteForm />
    </div>
  );
};

export default EntryCard;
