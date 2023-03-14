import React, { useState } from "react";
import "./FormikConcepts.css";

// ? formik is used to create a form for react
import { Form, useFormik } from "formik";
import { Formik } from "formik";

// ! yup is used to validata a formik forms
import * as yup from "yup";
const basicSchema = yup.object().shape({
  firstName: yup.string("please enter a first name").required("Required"),
  lastName: yup.string("please enter a last name").required("Required"),
  age: yup.number().positive().integer().min(18).required("Required"),
});

const onSubmit = (values, action) => {
  //   console.log(values);
  //   console.log(action);

  const time = () => {
    setTimeout(10000);
    action.resetForm();
  };
  time();
};

function FormikConcepts() {
  // Error styles

  //
  //   const [check, setCheck] = useState(0);
  let check = 1;
  const {
    values,
    errors,
    onChange,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <div className="FormikConcepts d-flex w-100 h-100vh align-items-center my-auto justify-content-center">
      {check === 0 ? (
        <>
          <div className="basic ">
            <p className="mb-4 fw-bold fs-3">basic</p>
            <form onSubmit={handleSubmit}>
              <label className="pe-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              <br />
              {errors.firstName && touched.firstName && (
                <p style={{ color: "red" }}>Enter First Name</p>
              )}
              <p style={{ color: "red" }}>{errors.firstName}</p>
              <label className="pe-2" htmlFor="firstName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              <br />
              {errors.lastName && touched.lastName && (
                <p style={{ color: "red" }}>Enter Last Name</p>
              )}
              <p style={{ color: "red" }}>{errors.lastName}</p>

              <label className="pe-2" htmlFor="firstName">
                Age
              </label>
              <input
                type="text"
                name="age"
                value={values.age}
                onChange={handleChange}
              />
              <br />
              {errors.age && touched.age && (
                <p style={{ color: "red" }}>Enter Age</p>
              )}
              <p style={{ color: "red" }}>{errors.age}</p>

              <button
                disabled={isSubmitting}
                style={{ background: "gold", marginTop: "20px" }}
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="advanced">
            <div>
              <h1>Advanced</h1>
              <Formik initialValues={{ name: "surya" }}>
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <input
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      name="name"
                    />
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FormikConcepts;
