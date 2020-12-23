import { iAction } from "../interfaces";
import { uiActions } from "./actions";

const { openModal, closeModal } = uiActions

export const uiOpenModal = (): iAction => ({
  type: openModal
})

export const uiCloseModal = (): iAction => ({
  type: closeModal
})