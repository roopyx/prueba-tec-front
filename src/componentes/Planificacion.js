import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Planificacion = () => {
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
          <MenuItem value={'Enero'}>Enero</MenuItem>
          <MenuItem value={'Febrero'}>Febrero</MenuItem>
          <MenuItem value={'Marzo'}>Marzo</MenuItem>
          <MenuItem value={'Abril'}>Abril</MenuItem>
          <MenuItem value={'Mayo'}>Mayo</MenuItem>
          <MenuItem value={'Junio'}>Junio</MenuItem>
          <MenuItem value={'Julio'}>Julio</MenuItem>
          <MenuItem value={'Agosto'}>Agosto</MenuItem>
          <MenuItem value={'Septiembre'}>Septiembre</MenuItem>
          <MenuItem value={'Octubre'}>Octubre</MenuItem>
          <MenuItem value={'Noviembre'}>Noviembre</MenuItem>
          <MenuItem value={'Diciembre'}>Diciembre</MenuItem>
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
    
    </div>
  );
}

export default Planificacion;