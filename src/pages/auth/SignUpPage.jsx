import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";


const SignUpPage = () => {
  return (
    <div className="flex justify-center bg-emerald-50">
      <FormContainer>
        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            { label: "password", type: "password" },
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          buttonLabel="Create"
          onSubmit={(values) => {
            if (values.username.length < 4) {
              console.log("username is too short")
              return;
            }

            if (values.password.length <4 ) {
              console.log("password is too short")
              return;
            }

            if (values.password !== values["confirm password"]) {
              console.log("passwords do not match")
              return;
            }


          }}
        />
        <Link to="/" className="text-emerald-700 underline mt-3">Sign In</Link>
      </FormContainer>
    </div>
  );
};

export default SignUpPage;
