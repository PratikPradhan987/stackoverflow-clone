import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAm2j5QCRCCJlRX0r1qBG_be1bXdXSRdyY",
//   authDomain: "stackoverflow-3f0d8.firebaseapp.com",
//   projectId: "stackoverflow-3f0d8",
//   storageBucket: "stackoverflow-3f0d8.appspot.com",
//   messagingSenderId: "76298589116",
//   appId: "1:76298589116:web:26ce6feaf0025dbdd511b9",
//   measurementId: "G-LDJE2JW8YE",
// };


const firebaseConfig = {
  apiKey: "AIzaSyBqQo3-0EeHs-d_RlN_7CeHuBeZVLvzIy4",
  authDomain: "stack-over-flow-9273f.firebaseapp.com",
  projectId: "stack-over-flow-9273f",
  storageBucket: "stack-over-flow-9273f.appspot.com",
  messagingSenderId: "166472886769",
  appId: "1:166472886769:web:d733cf619a1d705ba77c50"
};



const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
