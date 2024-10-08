import AuthForm from "../../AuthForm";

const SignInPage = () => {
  return (
    <div className="flex justify-center mt-6 bg-white">
      <AuthForm fields={[
        {label:"username",
            type:"text"
        },
        {
            label:"password",
            type:"password"
        }
      ]}
      buttonLabel="Sign In"/>
    </div>
  );
};

export default SignInPage;
