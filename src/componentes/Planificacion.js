import React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Calendar from './Calendar';
import Button from './Button';

const Planificacion = ({ setPlan }) => {

  const [mes, setMes] = useState('');
  const [año, setAño] = useState('');

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(50), (val, index) => year - index);

  const handleChangeMes = (event) => {
    setMes(event.target.value);
  };

  const handleChangeAño = (event) => {
    setAño(event.target.value);
  };

  return (

    <div style={{
      textAlign: "center",
      maxWidth: "950px",
      margin: "0 auto",
      border: "1px solid #e6e6e6",
      padding: "40px 25px",
      marginTop: "50px"
    }}>
      
      <h2>Planificación mensual</h2>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="mes-input-label">Mes</InputLabel>
        <Select
          labelId="mes-select-standard-label"
          id="mes-simple-select-standard"
          value={mes}
          onChange={handleChangeMes}
          label="Mes"
        >
          <MenuItem value={'01'}>Enero</MenuItem>
          <MenuItem value={'02'}>Febrero</MenuItem>
          <MenuItem value={'03'}>Marzo</MenuItem>
          <MenuItem value={'04'}>Abril</MenuItem>
          <MenuItem value={'05'}>Mayo</MenuItem>
          <MenuItem value={'06'}>Junio</MenuItem>
          <MenuItem value={'07'}>Julio</MenuItem>
          <MenuItem value={'08'}>Agosto</MenuItem>
          <MenuItem value={'09'}>Septiembre</MenuItem>
          <MenuItem value={'10'}>Octubre</MenuItem>
          <MenuItem value={'11'}>Noviembre</MenuItem>
          <MenuItem value={'12'}>Diciembre</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="año-simple-select-filled-label">Año</InputLabel>
        <Select
          labelId="año-simple-select-filled-label"
          id="año-simple-select-filled"
          value={año}
          onChange={handleChangeAño}
        >
          {years.map((year, index) => {
            return <MenuItem key={index} value={year}>{year}</MenuItem> 
          })}
        </Select>
      </FormControl>
      {mes & año ? <Calendar mes={mes} año={año} /> : ''}
      <br/>
      <Button onClick={() => setPlan('')}>Volver al formulario</Button>
    </div>
  );
}

export default Planificacion;