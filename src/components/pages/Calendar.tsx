import React, {
  CSSProperties,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from "react";
import {
  Calendar as CaledarApi,
  EventPropGetter,
  momentLocalizer,
  View,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es-mx";

import CalendarEvent from "../calendar/CalendarEvent";
import Navbar from "../ui/Navbar";
import messages from "../../helpers/calendar-messages-es";
import { iEvent } from "../../interfaces";
import CalendarModal from "../calendar/CalendarModal";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/uiActions";

moment.locale("es-mx");
const localizer = momentLocalizer(moment);

const events: Array<iEvent> = [
  {
    title: "Mi cumple",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgColor: "#fafafa",
    notes: "Notas en el evento",
    user: {
      name: "Amaury",
    },
  },
];

const Calendar: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem("lastView") as View | undefined) || "month"
  );

  const onDoubleClick = (ev: iEvent, e: SyntheticEvent<HTMLElement, Event>) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (
    ev: iEvent,
    e: SyntheticEvent<HTMLElement, Event>
  ) => {};

  const onViewChange = (view: View) => {
    setLastView(view);
    localStorage.setItem("lastView", view);
  };

  const eventStyleGetter: EventPropGetter<iEvent> = (
    ev,
    start,
    end,
    isSelected
  ) => {
    const style: CSSProperties = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
    };

    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <CaledarApi
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
      />
      <CalendarModal />
    </div>
  );
};

export default Calendar;
