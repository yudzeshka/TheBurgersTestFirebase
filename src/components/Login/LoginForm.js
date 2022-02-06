import React from "react";
import { Formik, Form, Field } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";

export default function LoginForm() {
  const handleSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: "", password: "" }}>
      <Form className=" flex flex-col">
        <Field
          name="email"
          placeholder="Email"
          className="border border-white text-black m-1 p-1 bg-gray-50/70"
        />
        <Field
          name="password"
          placeholder="Password"
          className="border border-white text-black m-1 p-1 bg-gray-50/70"
        />

        <button
          className="border border-white py-1 px-2 text-white m-1"
          type="submit"
        >
          Log In
        </button>
      </Form>
    </Formik>
  );
}
