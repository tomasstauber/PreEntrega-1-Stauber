import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwqtYhtDdBves1rQI9fPGJVgUXCuZs4cY",
  authDomain: "greenhealth-2c197.firebaseapp.com",
  projectId: "greenhealth-2c197",
  storageBucket: "greenhealth-2c197.appspot.com",
  messagingSenderId: "381362002927",
  appId: "1:381362002927:web:1d34c41aff8ee3778ff41a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);