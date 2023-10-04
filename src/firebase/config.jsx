import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDEzPwZhimp0pzUe_CU974yISZs2zR_U8w",
  authDomain: "appwrite-51bcd.firebaseapp.com",
  projectId: "appwrite-51bcd",
  storageBucket: "appwrite-51bcd.appspot.com",
  messagingSenderId:49138121973,
  appId: "1:49138121973:web:d69ea6d91bdb36682d99bc"
};
 


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();