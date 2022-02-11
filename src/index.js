import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import './index.css';
import * as Yup from 'yup';

const validate = Yup.object(
  {
    Name: Yup.string().max(20, 'Name should not exceed 20!').required('Name Required'),
    Location: Yup.string().required('Location Required'),
    Email: Yup.string().email('Invalid email address').required('Email Required')
  }
)
const Employee = () => {

  return (
    <div>
      <h2>Employee Form</h2>
      <Formik initialValues={{
        Id: '',
        Name: '',
        Location: '',
        Email: ''
      }} onSubmit={(values) => {
        alert(JSON.stringify(values))
      }}
        validationSchema={validate}
      >
        {({ errors, touched }) => (
          <Form >
            <p>Id: <Field name="Id" type="text" /></p>
            <p>Name: <Field name="Name" type="text" />
              {errors.Name && touched.Name && <div className="error">{errors.Name}</div>}</p>
            <p>Location: <Field name="Location" type="text" />
              {errors.Location && touched.Location && <div className="error">{errors.Location}</div>}</p>
            <p>Email: <Field name="Email" type="text" />
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