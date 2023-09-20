import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import { createAuthWithUserEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const defaltForm = {

    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUp = ()=>{
    const [formFields,setFormFields] = useState(defaltForm);
    const {displayName,email,password,confirmPassword} = formFields;
     console.log(formFields)

     const resetFormFieds = ()=>{
       setFormFields(defaltForm)
     }
   const handleSubmit =  async (event)=>{
      event.preventDefault();
      if(password !== confirmPassword){
        alert("your password do not match")
        return;
      }
      try{
        const {user} = createAuthWithUserEmailAndPassword(email,password);
        await createUserDocumentFromAuth(user,{displayName})
        resetFormFieds()
      }catch(error){
        if(error.code  == 'auth/email-already-in-use'){
          alert("cannot create acount email alredy in use")
        }else{
          console.log("user account creation encountred and error",error)
        }
      }
   }
    const handleChange = (event)=>{
     const{name,value} = event.target;

     setFormFields({...formFields,[name]:value})
    }
    return(
      <div className="sign-up-container">
         <h2>Dont have an account?</h2>
          <span>Sign Up with your email and password</span>
          <form onSubmit={handleSubmit}>
              <FormInput type="text" lable ="Display name" onChange={handleChange} name="displayName" value={displayName}required/>
              <FormInput type="email" lable= "Email" onChange={handleChange} name="email" value={email}required/>
              <FormInput type="password" lable= "Password" onChange={handleChange} name="password" value={password}required/>
              <FormInput type="password" lable = "Confirm Password"onChange={handleChange} name="confirmPassword" value={confirmPassword}required/>
              <button type="submit">Sign Up</button>
          </form>
      </div>
    )
    }
export default SignUp;