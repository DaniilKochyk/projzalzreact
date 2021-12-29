import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8CGqLvlKo7flELf8NkWSSSk5N0twApHY",
    authDomain: "marks-dc4a4.firebaseapp.com",
    projectId: "marks-dc4a4",
    storageBucket: "marks-dc4a4.appspot.com",
    messagingSenderId: "379706456528",
    appId: "1:379706456528:web:b1880fa821e70a42d9a1d5"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);