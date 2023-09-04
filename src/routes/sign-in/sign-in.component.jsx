import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const signIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return(
    <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>Click to sign with Google Popup</button>
    </div>
  )
};
export default signIn;
