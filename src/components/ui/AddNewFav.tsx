import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/uiActions";

const AddNewFav: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAddNew = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button className="btn btn-primary fab" onClick={handleAddNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddNewFav;
