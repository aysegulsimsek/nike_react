import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAStlfxxwVR6XmRwFvZ_FuFh9Y3FN4sCHo",
  authDomain: "e-commerce-nike-28654.firebaseapp.com",
  projectId: "e-commerce-nike-28654",
  storageBucket: "e-commerce-nike-28654.appspot.com",
  messagingSenderId: "778021866493",
  appId: "1:778021866493:web:9b752cdc3e4f738ebd2794"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);