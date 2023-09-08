import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Occasions from '../../components/constant/constant';
import './bookingForm.css'


const TableBookingForm = () => {
  const [time, setTime] = useState('');

  const initialValues = {
    email: '',
    date: '',
    time: '',
    occasion: '',
    numberOfGuests: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    occasion: Yup.string().required('Occasion is required'),
    numberOfGuests: Yup.number().required('Number of people is required')
      .min(1, 'The minimum number of people is 1')
      .max(4, 'The minimum number of people is 4')
  });


  const onSubmit = (values) => {
    // submit form data here
    fetch("#toBeInputedLater", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      Formik.resetForm();
      Formik.setSubmitting(false);
      alert("Booking Successful");
    }).catch((err) => {
      Formik.setSubmitting(false);
      alert("Booking Failed");
    });
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label>Date:</label>
            <Field name="date" type="date" />
            <ErrorMessage name="date" />
          </div>
          <div>
            <label>Time:</label>
            <select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="">Select a time</option>
              <option value="9:00AM">9:00 AM</option>
              <option value="10:00AM">10:00 AM</option>
              <option value="11:00AM">11:00 AM</option>
              <option value="12:00PM">12:00 PM</option>
              <option value="1:00PM">1:00 PM</option>
              <option value="2:00PM">2:00 PM</option>
              <option value="3:00PM">3:00 PM</option>
              <option value="4:00PM">4:00 PM</option>
              <option value="5:00PM">5:00 PM</option>
              <option value="6:00PM">6:00 PM</option>
              <option value="7:00PM">7:00 PM</option>
              <option value="8:00PM">8:00 PM</option>
              <option value="9:00PM">9:00 PM</option>
            </select>
            <ErrorMessage name="time" />
          </div>
          <div>
            <label htmlFor='occasion'>Occasion</label>
          <select
            name="occasion"
            id="occasion"
          >
            {Occasions.map((occasion) => (
              <option key={occasion.value} value={occasion.value}>
                {occasion.label}
              </option>
            ))}
          </select>

          </div>
          <div>
            <label>Number of Guests:</label>
            <Field name="numberOfGuests" type="number" min="1" />
            <ErrorMessage name="numberOfGuests" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default TableBookingForm;
