import React, { FunctionComponent } from "react";
import Navbar from "../ui/Navbar";
import { Calendar as CaledarApi, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar: FunctionComponent = () => {
  const events = [
    {
      title: "Mi cumple",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgColor: "#fafafa",
    },
  ];

  return (
    <div className="calendar-screen">
      <Navbar />
      <CaledarApi
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default Calendar;
