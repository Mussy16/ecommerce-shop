import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/signup.components";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Click to sign with Google Popup</button>
      <SignUp/>
    </div>
  );
};
export default SignIn;
