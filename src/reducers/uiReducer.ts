import { uiActions } from "../actions/actions";
import { iAction, iUiState } from "../interfaces";

const initialState: iUiState = {
  modalOpen: false
}

const uiReducer = (state: iUiState = initialState, action: iAction): iUiState => {
  switch (action.type) {
    case uiActions.openModal:
      return {
        ...state,
        modalOpen: true
      };
    case uiActions.closeModal:
      return {
        ...state,
        modalOpen: false
      }
    default:
      return state;
  }
}

export default uiReducer;