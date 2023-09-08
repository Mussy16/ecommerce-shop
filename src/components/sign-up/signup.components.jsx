import { useState } from "react";
import { creatAuthWithUserEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaltForm = {

    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUp = ()=>{
    const [formFields,setFormFields] = useState(defaltForm);
    const {displayName,email,password,confrimPassword} = formFields;

    console.log(formFields)
    
    const handleChange = (event)=>{
     const{name,value} = event.target;

     setFormFields({...formFields,[name]:value})
    }
  return(
    <div>
        <h1>Sign Up with your email and password</h1>
        <form onSubmit={()=>{}}>
            <label>Display name</label>
            <input type="text"onChange={handleChange} name="displayName" value={displayName}required></input>
            <label>Email</label>
            <input type="email" onChange={handleChange} name="email" value={email}required></input>
            <label>Password</label>
            <input type=""required></input>
            <label>Confirm Password</label>
            <input type="password" onChange={handleChange} name="password" value={password}required></input>
            <label></label>
            <input type="password"onChange={handleChange} name="confirmPassword" value={confrimPassword}required></input>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}
export default SignUp;