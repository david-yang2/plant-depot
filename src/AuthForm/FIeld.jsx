const Field = (props) => {
  const { field, onChange, values } = props;
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={field.label} className="mb-1">
        {field.label}
      </label>
      <input
        className="border-slate-300 border-2 bg-slate-50 rounded-md focus:outline-emerald-600 px-3"
        type={field.type}
        id={field.label}
        value={values[field.label]}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
