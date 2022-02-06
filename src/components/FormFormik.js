import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";

export default function FormFormik() {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        more18: false,
      }}
      onSubmit={(formValues) => {
        alert(JSON.stringify(formValues, null, 2));
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required("is required")
          .max(20, "should be less than 20 characters")
          .min(2, "to short"),
        phone: Yup.string()
          .required("is required")
          .max(20, "should be less than 20 characters")
          .min(2, "to short"),
        more18: Yup.bool().oneOf(
          [true],
          "Confirm that you are over 18 years old"
        ),
      })}
    >
      {({ errors, touched, isValid }) => (
        <div className="container">
          <p>Customers data:</p>
          <Form>
            <Field
              className={errors.where && touched.where ? "whereErr" : ""}
              id="name"
              name="name"
              placeholder="Enter your name"
              component={FormInput}
            ></Field>
            <Field
              className={
                "where " + (errors.where && touched.where ? "whereErr" : "")
              }
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              component={FormInput}
            ></Field>

            <div>
              <Field type="checkbox" id="more18" name="more18"></Field>
              <ErrorMessage name="more18" component="div" className="error" />
              <label htmlFor="more18">I am over 18 years old</label>
            </div>
            <div>
              <button type="submit" disabled={!isValid}>
                Search
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
