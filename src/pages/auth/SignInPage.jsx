import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user"
import {useState} from "react"

const SignInPage = () => {
  const [error, setError] = useState("")
  const location = useLocation();

  console.log(location.state)
  return (
    <div className="flex bg-emerald-50">
      <FormContainer>
      <div className="text-red-600">{error}</div>
      {location.state?.newAccount && <div
      className="border border-green-400 my-4 px-4 py-2 rounded-lg bg-green-200 font-playfair">
        Account created successfully. Please sign in.</div>}
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            {
              label: "password",
              type: "password",
            },
          ]}
          buttonLabel="Sign In"
          onSubmit={async (values) => {
            const response = await userService.createSession({
              username: values.username,
              password: values.password
            })

            if (response.status === 201) {
              console.log("You've logged in successfully")
              setError("")
            } else {
              const data = await response.json()
              setError(data.error)
            }
          }}
        />
        <Link to="/sign-up" className="text-emerald-700 underline mt-3">
          Create an Account
        </Link>
      </FormContainer>
    </div>
  );
};

export default SignInPage;
