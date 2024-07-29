// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRowt1kuAGaYSDF6j0gYejRjh6FgcqRdQ",
  authDomain: "intern-counting-app.firebaseapp.com",
  databaseURL: "https://intern-counting-app.firebaseio.com",
  projectId: "intern-counting-app",
  storageBucket: "intern-counting-app.appspot.com",
  messagingSenderId: "491407332791",
  appId: "1:491407332791:web:2c8edcf20262aaf7204432",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
