import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDbhebyb9jMJiGM3aNupNFSPRsIRGnYQEQ",
  authDomain: "uploadimage-80d74.firebaseapp.com",
  projectId: "uploadimage-80d74",
  storageBucket: "uploadimage-80d74.appspot.com",
  messagingSenderId: "638560501319",
  appId: "1:638560501319:web:cbe9514e239322c7ab7b62"
  };

  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);