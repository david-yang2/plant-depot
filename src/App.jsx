import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUPPage";
import SessionContext from "contexts/SessionContext"
import * as UserService from "services/user"


const App = () => {
  const [token, SetToken] = useState(() => UserService.getSessionTokenStorage())
  return (
    <SessionContext.Provider
      value={{
        signIn : (capstoneSessionToken) => {
          SetToken(capstoneSessionToken);
          UserService.setSessionTokenStorage(capstoneSessionToken)
        },
        signOut : () => {
          SetToken(null);
          UserService.removeSessionTokenStorage();
        }
        }
      }
    >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
