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
  stringOrDate,
  View,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es-mx";

import CalendarEvent from "../calendar/CalendarEvent";
import Navbar from "../ui/Navbar";
import messages from "../../helpers/calendar-messages-es";
import { iAppState, iCalendarState, iEvent } from "../../interfaces";
import CalendarModal from "../calendar/CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/uiActions";
import { eventSetActive, eventUnsetActive } from "../../actions/eventsActions";
import AddNewFav from "../ui/AddNewFav";
import DeleteEventFav from "../ui/DeleteEventFav";

moment.locale("es-mx");
const localizer = momentLocalizer(moment);

const Calendar: FunctionComponent = () => {
  const { events, activeEvent } = useSelector<iAppState, iCalendarState>(
    ({ calendar }) => calendar
  );
  const dispatch = useDispatch();
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem("lastView") as View | undefined) || "month"
  );

  const onDoubleClick = (ev: iEvent, e: SyntheticEvent<HTMLElement, Event>) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (ev: iEvent, e: SyntheticEvent<HTMLElement, Event>) => {
    dispatch(eventSetActive(ev));
  };

  const onViewChange = (view: View) => {
    setLastView(view);
    localStorage.setItem("lastView", view);
  };

  const onSelectSlot: (slot: {
    start: stringOrDate;
    end: stringOrDate;
    slots: Date[] | string[];
    action: "select" | "click" | "doubleClick";
  }) => void = () => {
    dispatch(eventUnsetActive());
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
        onSelectSlot={onSelectSlot}
      />
      <AddNewFav />
      {activeEvent !== null && <DeleteEventFav />}
      <CalendarModal />
    </div>
  );
};

export default Calendar;
