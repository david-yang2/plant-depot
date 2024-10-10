const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex w-full">
      <div className="hidden md:flex relative">
        <img
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
          className="h-screen object-cover"
        />
        <div className="absolute w-full h-full bg-black/20"></div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 h-screen px-5">
        <img
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
          className="w-24"
        />
        <div className="my-2 text-2xl text-emerald-800 font-bold font-playfair">
          Plant Depot
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
