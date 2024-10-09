import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, buttonLabel } = props;
  console.log(fields);

  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  console.log(values);
  return (
    <form className="border border-slate-300 shadow:xl rounded-md px-4 py-2"
    onSubmit={(e) => {
      e.preventDefault();
    }}>
      {fields.map((field) => (
        <Field
          label={field.label}
          type={field.type}
          key={field.label}
          values={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="my-2 bg-emerald-700 w-full rounded-full text-lg px-4 py-1 text-white">
        {buttonLabel}{" "}
      </button>
    </form>
  );
};

export default AuthForm;
