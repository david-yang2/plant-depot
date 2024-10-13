import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import * as userService from "services/user"
import {useState} from "react"

const SignInPage = () => {
  const [error, setError] = useState("")
  return (
    <div className="flex bg-emerald-50">
      <FormContainer>
      <div className="text-red-600">{error}</div>
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
