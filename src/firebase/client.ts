import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNGPpmWkRzbZmV8768Psk7A2Bt0tsiRMY",
  authDomain: "mocksy-77172.firebaseapp.com",
  projectId: "mocksy-77172",
  storageBucket: "mocksy-77172.firebasestorage.app",
  messagingSenderId: "659965631809",
  appId: "1:659965631809:web:4e422e4bc3bcb0d54a95c0",
  measurementId: "G-TS4MMLK4P9"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)