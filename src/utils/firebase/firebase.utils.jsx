
import{initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCrHY8MpvrTmBcDpsLM6akvOjMnZ8xjbAU",
    authDomain: "ecommerce-shop-f54d2.firebaseapp.com",
    projectId: "ecommerce-shop-f54d2",
    storageBucket: "ecommerce-shop-f54d2.appspot.com",
    messagingSenderId: "243865824512",
    appId: "1:243865824512:web:9b853c68bb4ada59f617e5"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
   prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);

  export const db = getFirestore();
   export const createUserDocumentFromAuth = async (userAuth)=>{
     const userDocRef = doc(db,'users',userAuth.uid);

     console.log(userDocRef)

     const userSnapshot = await getDoc(userDocRef);
     console.log(userSnapshot);
     console.log(userSnapshot.exists())

     if(!userSnapshot.exists()){
      const{displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef,{displayName,email,createdAt})
      }
      catch(error){
        console.log('there was an eeror creating the user', error.message)
      }
     }
     return userDocRef;
  }