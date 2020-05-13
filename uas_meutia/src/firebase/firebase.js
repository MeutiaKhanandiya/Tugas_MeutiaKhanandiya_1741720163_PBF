import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCi0-Rdi-18aD_BwIQVemDZ9Shv8rejl2o",
  authDomain: "uasmeutia18.firebaseapp.com",
  databaseURL: "https://uasmeutia18.firebaseio.com",
  projectId: "uasmeutia18",
  storageBucket: "uasmeutia18.appspot.com",
  messagingSenderId: "773699920259",
  appId: "1:773699920259:web:15e84ff65ae64b14c496b6",
  measurementId: "G-383RPKJ8B0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;

export default myFirebase;