import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: secrets.API_KEY_FIREBASE,
  authDomain: secrets.AUTH_DOMAIN_FIREBASE,
  projectId: secrets.PROJECT_ID_FIREBASE,
  storageBucket: secrets.STORAGE_BUCKET_FIREBASE,
  messagingSenderId: secrets.MESSAGING_SENDERID_FIREBASE,
  appId: secrets.APP_ID_FIREBASE
};

const app= initializeApp(firebaseConfig)

export const auth= getAuth(app);
