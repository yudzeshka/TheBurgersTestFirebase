import React from "react";
import { Formik, Form, Field } from "formik";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth, db } from "../../firebase";

export default function SignUpForm() {
  const handleSubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      async () => {
        await updateProfile(auth.currentUser, {
          displayName: values.username,
        });
        setDoc(doc(db, "users", auth.currentUser.uid), {
          username: values.username,
          email: values.email,
          phoneNumber: values.phoneNumber,
          address: values.address,
        });
      }
    );
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
        username: "",
        phoneNumber: "",
        address: "",
      }}
    >
      <Form className=" flex flex-col">
        <Field
          name="email"
          className="border border-white text-black m-1 p-1 bg-gray-50/70"
          placeholder="Email"
        />
        <Field
          name="password"
          className="border border-white text-black m-1 p-1 bg-gray-50/70"
          placeholder="Password"
          type="password"
        />
        <Field
          name="username"
          className="border border-white text-black m-1 p-1 bg-gray-50/70"
          placeholder="Username"
        />
        <Field
          name="phoneNumber"
          className="border border-white text-black m-1 p-1 bg-gray-50/70"
          placeholder="Mobile phone"
        />
        <Field
          name="address"
          className="border border-white text-black m-1 p-1 bg-gray-50/70"
          placeholder="enter your address"
        />
        <button
          className="border border-white m-1 p-1 text-white"
          type="submit"
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}
