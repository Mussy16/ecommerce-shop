import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const signIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return(
    <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>Click to sign with Google Popup</button>
    </div>
  )
};
export default signIn;
