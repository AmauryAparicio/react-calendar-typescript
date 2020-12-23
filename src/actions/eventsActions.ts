import { iAction, iEvent } from "../interfaces";
import { eventActions } from "./actions";

const { addNew, setActive, unsetActive, evUpdate, evDelete, } = eventActions;

export const eventAddNew = (ev: iEvent): iAction<iEvent> => ({
  type: addNew,
  payload: ev
});

export const eventSetActive = (ev: iEvent): iAction<iEvent> => ({
  type: setActive,
  payload: ev
});

export const eventUnsetActive = (): iAction => ({
  type: unsetActive
});

export const eventUpdate = (ev: iEvent): iAction<iEvent> => ({
  type: evUpdate,
  payload: ev
});

export const eventDelete = (): iAction => ({ type: evDelete });