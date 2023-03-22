import firebase from 'firebase/compat/app';

import {initializeApp} from 'firebase/app' //used to tell firebase that this instance should relate to our project created on firebase

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore' //remember collection,document,data. using doc we're importing document instance


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAmPQlFTpw_ETic05oDFq-dkFgqI62lGk",
    authDomain: "elite-clothing-a6ff4.firebaseapp.com",
    projectId: "elite-clothing-a6ff4",
    storageBucket: "elite-clothing-a6ff4.appspot.com",
    messagingSenderId: "957810269699",
    appId: "1:957810269699:web:fc587acf2568a8af72b836"
  };
  
// Initialize Firebase
const firebaseApp =initializeApp(firebaseConfig); //CRUD actions will be implemented using firebaseApp instance

//we may also have GithubAuthProvide, FacebookAuthProvider etc.
const provider= new GoogleAuthProvider(); //GoogleAuthProvider is a class we get from firebase. we may need more of these providers, hence we're using new keyword

provider.setCustomParameters({
    prompt: "select_account"

})

export const auth= getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  
  // doc(<database>, <collection>, <identifier>)
  const userDocRef = doc(db, 'users', userAuth.uid);  
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  //if user data does not exists => create/set the document with data from userAuth in my collection

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {displayName, email, createdAt})

    } catch(error){
      console.log('error creating user', error.message)
    }
  }


  //if user data exists => return userdocRef
  return userDocRef;



}