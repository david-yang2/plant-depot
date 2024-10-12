import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, buttonLabel, onSubmit } = props;

  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  const [loading, setLoading] = useState(false);

  return (
    <form
      className="border border-slate-300 shadow:xl rounded-md px-4 py-2 bg-slate-50"
      onSubmit={async (e) => {
        e.preventDefault();

        // display spinner
        setLoading(true);
        await onSubmit(values); // onSubmit is an async function
                                // wait for onSubmit to be done before setting loading to false
        setLoading(false);
      }}
    >
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
      <button className="my-2 relative bg-emerald-700 w-full rounded-full text-lg px-4 py-1 text-white">
        {buttonLabel}{" "}
        {loading && (
          <div className="absolute top-0 right-4 items-center flex h-full">
            <i className="fa-light fa-spinner-third text-green-300 animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
