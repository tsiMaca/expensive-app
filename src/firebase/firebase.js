
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCdwHOraiVuYgfH1m4kjBJ-64iY3ilwu6I",
  authDomain: "proyecto1-33ae0.firebaseapp.com",
  databaseURL: "https://proyecto1-33ae0-default-rtdb.firebaseio.com",
  projectId: "proyecto1-33ae0",
  storageBucket: "proyecto1-33ae0.appspot.com",
  messagingSenderId: "1074175743310",
  appId: "1:1074175743310:web:1139d147bc53c3d6627a1f"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);