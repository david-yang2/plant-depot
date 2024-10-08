import {useState} from "react"

const AuthForm = (props) => {


  const { fields, buttonLabel } = props;
  console.log(fields);

 

  console.log(values)
  return (
    <form className="border border-slate-300 shadow:xl rounded-md px-4 py-2">
      {fields.map((field) => (
        <div key={field.label}
        className="flex flex-col my-2">
          <label htmlFor={field.label}
           className="mb-1">{field.label}</label>
          <input className="border-slate-300 border-2 bg-slate-50 rounded-md focus:outline-emerald-600 px-3"
          type={field.type} id={field.label} />
        </div>
      ))}
      <button className="my-2 bg-emerald-700 w-full rounded-full text-lg px-4 py-1 text-white">{buttonLabel} </button>
    </form>
  );
};

export default AuthForm;
