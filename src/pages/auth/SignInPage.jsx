import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="flex justify-center bg-emerald-50">
      <FormContainer>
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            {
              label: "password",
              type: "password",
            },
          ]}
          buttonLabel="Sign In"
        />
        <Link to="/sign-up" className="text-emerald-700 underline mt-3">
          Create an Account
        </Link>
      </FormContainer>
    </div>
  );
};

export default SignInPage;
