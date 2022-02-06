import { ErrorMessage } from "formik";

function FormInput({
  form,
  field,
  label,
  type = "text",
  className,
  placeholder,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        className="w-4/5 m-3 text-black rounded "
        {...field}
        placeholder={placeholder}
      ></input>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
}

export default FormInput;
