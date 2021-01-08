import { FunctionComponent } from "react";

export interface iRoute {
  path: string,
  component: FunctionComponent<any>,
  type?: string,
  routes?: Array<iRoute>,
  exact?: boolean,
}

export interface iUser {
  uid?: string,
  name?: string,
}

export interface iUserState extends iUser {
  checking: boolean;
}

export interface iEvent {
  _id?: string,
  title: string,
  start: Date,
  end: Date,
  bgColor?: string,
  notes?: string,
  user?: {
    _id: string,
    name: string,
  },
}

export interface iAction<T = undefined> {
  type: string,
  payload?: T
}

export interface iUiState {
  modalOpen: boolean,
}

export interface iCalendarState {
  events: Array<iEvent>,
  activeEvent: iEvent | null,
}

export interface iAppState {
  ui: iUiState,
  calendar: iCalendarState
}