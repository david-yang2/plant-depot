import AuthForm from "./AuthForm";
const SignUpPage = () => {
  return (
    <div className="flex justify-center mt-6 bg-white ">
      <AuthForm
        fields={
          [{
            label: "username",
            type: "text",
          },
          { label: "password", type: "password" },
          {
            label: "confirm password",
            type: "password",
          }]
        }
        buttonLabel="Create"
      />
    </div>
  );
};

export default SignUpPage;
