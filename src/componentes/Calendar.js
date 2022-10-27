import React from "react";
import { useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/main.cjs";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import axios from "axios";

const events = [
  { title: "AZUL +5", start: "2022-02-26", backgroundColor: "green", textColor: "white" },
];

const Calendar = ({ mes, año }) => {
  let firstDaty = 1;

  const baseUrl = `http://127.0.0.1:5000/filter/date?mes=${mes}&año=${año}`;

  const requestForms = async () => {
    try {
      const resp = await axios.get(baseUrl)
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestForms();
  },[año]);

  return (
      <FullCalendar
        defaultView="dayGridMonth"
        firstDay={firstDaty}
        locale="es"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={events}
      />
  );
}

export default Calendar;