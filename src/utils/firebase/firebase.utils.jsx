
import{initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

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
  