import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik, Formik, Field, Form } from 'formik';
import './index.css';
function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = 'Name Required';
  }
  if (value.length > 20) {
    error = 'Name should not exceed 20!';
  }
  return error;
}
function validateLocation(value) {
  let error;
  if (!value) {
    error = 'Location Required';
  }
  return error;
}

const Employee = () => {

  return (
    <div>
      <h2>Employee Form</h2>
      <Formik initialValues={{
        Id: '',
        Name: '',
        Location: '',
        Salary: ''
      }} onSubmit={(values) => {
        console.log(values)
      }}
      >
        {({ errors, touched }) => (
          <Form >
            <p>Id: <Field name="Id" type="text" /></p>
            <p>Name: <Field name="Name" type="text" validate={validateUsername} />
            {errors.Name && touched.Name && <div className="error">{errors.Name}</div>}</p>
            <p>Location: <Field name="Location" type="text" validate={validateLocation}/>
            {errors.Location && touched.Location && <div className="error">{errors.Location}</div>}</p>
            <p>Email: <Field name="Email" type="text" validate={validateEmail}/>
            {errors.Email && touched.Email && <div className="error">{errors.Email}</div>}</p>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const e = <Employee></Employee>

ReactDOM.render(e, document.getElementById("root"));