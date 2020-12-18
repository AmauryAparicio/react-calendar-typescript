import React, { FunctionComponent } from "react";
import { EventProps } from "react-big-calendar";
import { iEvent } from "../../interfaces";

const CalendarEvent: FunctionComponent<EventProps<iEvent>> = ({ event }) => {
  const { title, user } = event;

  return (
    <div>
      <span>{title}</span> - <strong>{user?.name}</strong>
    </div>
  );
};

export default CalendarEvent;
