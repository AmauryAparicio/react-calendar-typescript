import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { eventDelete } from "../../actions/eventsActions";

const DeleteEventFav: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eventDelete());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <i className="fas fa-trash"></i>
      &nbsp;
      <span>Borrar evento</span>
    </button>
  );
};

export default DeleteEventFav;
