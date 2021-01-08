import { iAction, iUserState } from "../interfaces";

const initialState = {
  checking: true
}

const authReducer = (state: iUserState = initialState, action: iAction): iUserState => {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;