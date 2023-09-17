import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbNo7S-FQKruMiJd1RL6AC9ljU-wREDOI",
  authDomain: "messenger-70aff.firebaseapp.com",
  projectId: "messenger-70aff",
  storageBucket: "messenger-70aff.appspot.com",
  messagingSenderId: "449471633091",
  appId: "1:449471633091:web:ee7182fb4361c7ff6f3476"
};


export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db=getFirestore();

// const storage = getStorage(firebaseApp);