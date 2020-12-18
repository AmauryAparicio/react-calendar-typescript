import { FunctionComponent } from "react";

export interface iRoute {
  path: string,
  component: FunctionComponent<any>,
  type?: string,
  routes?: Array<iRoute>,
  exact?: boolean,
}

export interface iEvent {
  title?: string,
  start?: Date,
  end?: Date,
  bgColor?: string,
  notes?: string,
  user?: {
    _id?: string,
    name?: string,
  },
}

export interface iAction<T> {
  type: string,
  payload?: T
}

export interface iUiAction extends iAction<undefined> { }

export interface iUiState {
  modalOpen: boolean,
}

export interface iAppState {
  ui: iUiState
}