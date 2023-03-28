
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCdwHOraiVuYgfH1m4kjBJ-64iY3ilwu6I",
  authDomain: "proyecto1-33ae0.firebaseapp.com",
  databaseURL: "https://proyecto1-33ae0-default-rtdb.firebaseio.com",
  projectId: "proyecto1-33ae0",
  storageBucket: "proyecto1-33ae0.appspot.com",
  messagingSenderId: "1074175743310",
  appId: "1:1074175743310:web:1139d147bc53c3d6627a1f"
};
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);

 export { db, provider};