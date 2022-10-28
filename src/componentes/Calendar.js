import React from "react";
import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/main.cjs";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import axios from "axios";

const Calendar = ({ mes, año }) => {

  const [forms, setForms] = useState('')

  const events = [];

  let firstDaty = 1;
  let initialDate = `${año}-${mes}-01`;
  
  const baseUrl = `http://127.0.0.1:5000/filter/date?mes=${mes}&año=${año}`;

  const requestForms = async () => {
    try {
      const resp = await axios.get(baseUrl)
      resp.data.forEach(form => {
        events.push({ 
          title: form.destino,
          start: form.fecha,
          backgroundColor: "green",
          textColor: "white"
        })
      })
      setForms(events)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestForms();
  },[]);
  
  return (
    <FullCalendar
      firstDay={firstDaty}
      initialDate={initialDate}
      locale="es"
      themeSystem="Simplex"
      plugins={[dayGridPlugin]}
      events={forms}
    />
  );
}

export default Calendar;