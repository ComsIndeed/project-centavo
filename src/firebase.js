import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb5Kue1GpqbqNwswDZ40kr1C33uIa1TsE",
  authDomain: "project-centavo.firebaseapp.com",
  projectId: "project-centavo",
  storageBucket: "project-centavo.appspot.com",
  messagingSenderId: "673297801987",
  appId: "1:673297801987:web:a1e50378730d006450ff36",
};

const app = initializeApp(firebaseConfig);

export const database = new getFirestore(app);
