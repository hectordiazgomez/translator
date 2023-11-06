import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC0BiXJobgwmPE3eH-OTMgdnwGzd_U2Vio",
    authDomain: "yumi-5f67f.firebaseapp.com",
    projectId: "yumi-5f67f",
    storageBucket: "yumi-5f67f.appspot.com",
    messagingSenderId: "1035973920798",
    appId: "1:1035973920798:web:00a8e78c15ad78bbde460f"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);