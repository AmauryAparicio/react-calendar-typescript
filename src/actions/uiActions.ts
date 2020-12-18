import { iUiAction } from "../interfaces";
import { uiActions } from "./actions";

const { openModal, closeModal } = uiActions

export const uiOpenModal = (): iUiAction => ({
  type: openModal
})

export const uiCloseModal = (): iUiAction => ({
  type: closeModal
})