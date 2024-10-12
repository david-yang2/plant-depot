import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import * as userServices from "services/user"
import {useState} from "react"

const SignUpPage = () => {
  const [error, setError] = useState("")
  return (
    <div className="flex justify-center bg-emerald-50">
      <FormContainer>
        <div className="text-red-600">{error}</div>
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
          onSubmit={async (values) => {

            // client side validation
            if (values.username.length < 4) {
              setError("username is too short")
              return;
            }

            if (values.password.length <4 ) {
              setError("password is too short")
              return;
            }

            if (values.password !== values["confirm password"]) {
              setError("passwords do not match")
              return;
            }

            // send request
            // fetch returns a promise so we can await
            const response = await userServices.createUser({
              username: values.username,
              password: values.password
            })

            // server side validation

            if (response.status === 201){
              setError("User Created")
            } else {
              const data = await response.json();
              setError(data.error)
            }

            console.log(response.status)
          }}
        />
        <Link to="/" className="text-emerald-700 underline mt-3">Sign In</Link>
      </FormContainer>
    </div>
  );
};

export default SignUpPage;
