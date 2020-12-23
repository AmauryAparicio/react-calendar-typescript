import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useMemo,
  useState,
} from "react";
import Modal from "react-modal";
import "./modal.css";
/// <reference path="./../../react-datetime-picker.d.ts" />
import DateTimePicker from "react-datetime-picker";
import useForm from "../../hooks/useForm";
import moment from "moment";
import Swal from "sweetalert2";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { iAppState, iCalendarState, iEvent, iUiState } from "../../interfaces";
import { uiCloseModal } from "../../actions/uiActions";
import {
  eventAddNew,
  eventUnsetActive,
  eventUpdate,
} from "../../actions/eventsActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0).add(1, "hours");
const nowPlusOne = now.clone().add(1, "hours");

const CalendarModal: FunctionComponent = () => {
  const { modalOpen } = useSelector<iAppState, iUiState>(({ ui }) => ui);
  const { activeEvent } = useSelector<iAppState, iCalendarState>(
    ({ calendar }) => calendar
  );
  const [isTitleValid, setIsTitleValid] = useState(true);
  const initialForm = useMemo<iEvent>(
    () => ({
      title: "",
      notes: "",
      start: now.toDate(),
      end: nowPlusOne.toDate(),
    }),
    []
  );
  const [values, handleInputChange, reset] = useForm<iEvent>(initialForm);

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeEvent !== null) {
      reset({ ...activeEvent });
    } else {
      reset(initialForm);
    }
    return () => {
      reset(initialForm);
    };
  }, [activeEvent, reset, initialForm]);

  const handleStartDate = (newStartDate: Date) => {
    reset({
      ...values,
      start: newStartDate,
    });
  };

  const handleEndDate = (newEndDate: Date) => {
    reset({
      ...values,
      end: newEndDate,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const momentStart = moment(values.start);
    const momentEnd = moment(values.end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        "Error",
        "La fecha final debe de ser mayor a la fecha de inicio",
        "error"
      );
    }

    if (values.title.trim().length < 2) {
      return setIsTitleValid(false);
    }

    if (activeEvent) {
      dispatch(eventUpdate(values));
    } else {
      dispatch(
        eventAddNew({
          ...values,
          bgColor: "#fafafa",
          user: {
            name: "Panfo",
            _id: new Date().getTime().toString(),
          },
        })
      );
    }

    setIsTitleValid(true);
    closeModal();
  };

  const closeModal = () => {
    reset(initialForm);
    dispatch(eventUnsetActive());
    dispatch(uiCloseModal());
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
      contentLabel="modal"
    >
      <h1> {activeEvent ? "Editar evento" : "Nuevo evento"} </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={handleStartDate}
            value={values.start}
            minDate={now.toDate()}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={handleEndDate}
            value={values.end}
            minDate={values.start}
            className="form-control"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${
              (!validator.isEmpty(values.title.trim()) && isTitleValid) ||
              values.title.length > 2
                ? "is-valid"
                : validator.isEmpty(values.title.trim())
                ? ""
                : "is-invalid"
            }`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={values.title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={values.notes}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
