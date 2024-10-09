const Field = (props) => {
  const { label, type, onChange, value } = props;
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={label} className="mb-1">
        {label}
      </label>
      <input
        className="border-slate-300 border-2 bg-slate-50 rounded-md focus:outline-emerald-600 px-3"
        type={type}
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
