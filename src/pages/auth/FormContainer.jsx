const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://static-task-assets.react-formula.com/capstone_logo_dark.png" 
      className="w-24"/>
      <div className="my-2 text-2xl text-emerald-800 font-bold font-playfair">Plant Depot</div>
      {children}
    </div>
  );
};

export default FormContainer;
