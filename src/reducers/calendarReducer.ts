import { iAction, iCalendarState, iEvent } from "../interfaces";
import { eventActions } from "../actions/actions";

const initialState: iCalendarState = {
  events: [],
  activeEvent: null
}

const { addNew, setActive, unsetActive, evUpdate, evDelete } = eventActions;

const calendarReducer = (state = initialState, action: iAction<iEvent | Array<iEvent>>): iCalendarState => {
  switch (action.type) {
    case addNew:
      return { ...state, events: [...state.events, (action.payload as iEvent)] }
    case setActive:
      return { ...state, activeEvent: action.payload as iEvent }
    case unsetActive:
      return {
        ...state,
        activeEvent: null
      }
    case evUpdate:
      return {
        ...state,
        events: state.events.map(ev => (ev._id === (action.payload as iEvent)._id ? action.payload as iEvent : ev))
      }
    case evDelete:
      return {
        ...state,
        events: state.events.filter(ev => (ev._id !== state.activeEvent?._id)),
        activeEvent: null
      }
    default:
      return state;
  }
}

export default calendarReducer;