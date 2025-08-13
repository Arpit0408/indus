import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6BNdikCYAnU3kfz884Z32oIy_bHq9eDs",
  authDomain: "indussynergy-48b29.firebaseapp.com",
  projectId: "indussynergy-48b29",
  storageBucket: "indussynergy-48b29.firebasestorage.app",
  messagingSenderId: "75125080784",
  appId: "1:75125080784:web:546d436eb2917bc9ac94d5",
  measurementId: "G-9HLCGV16WH"
};

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);

export { db };