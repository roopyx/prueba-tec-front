import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Container from './componentes/Container';
import Section from './componentes/Section';
import Input from './componentes/Input';
import Button from './componentes/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Planificacion from './componentes/Planificacion';

const baseUrl = 'http://127.0.0.1:5000/new/form';

const App = () => {

  const [form, setForm] = useState({})
  const [plan, setPlan] = useState(false)

  const showPlanificacion = () => {
    setPlan(true);
  }

  const sendForm = async () => {
    try {
      const resp = await axios.post(baseUrl, form);
      console.log(resp)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (form !== {}) {
      sendForm();
    }
  },[form]);

  if (plan) {
    return <Planificacion setPlan={setPlan} />
  }
  
  if (form && plan !== true) {
    return (
      <Container>
        <Section>
          <Formik
            initialValues={{
              expansion: '',
              fecha: '',
              destino: '',
              tonelaje: '',
            }}
            onSubmit={(values, { resetForm }) => {
              setForm(values)
              resetForm();
            }}
            validationSchema={Yup.object({
              expansion: Yup
                .string()
                .required('Campo requerido'),
              fecha: Yup
                .date()
                .required('Campo requerido')
                .typeError('Debe ser una fecha'),
              destino: Yup
                .string()
                .required('Campo requerido'),
              tonelaje: Yup
                .number()
                .required('Campo requerido')
                .typeError('Debe ser un numero'),
              })}>
            <Form>
              <Input name='expansion' label='Expansión' />
              <Input name='fecha' label='Fecha' type='date' />
              <Input name='destino' label='Destino' />
              <Input name='tonelaje' label='Tonelaje' />
              <Button type='submit'>Enviar</Button>
            </Form>
          </Formik>
          <br />
          <Button onClick={showPlanificacion}>Planificacion</Button>
        </Section>
      </Container>
    )
  }
}

export default App
