import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXKSSXqGDZ8xVyDYIxd0mXKCQDW8fZ4ps",
  authDomain: "dragon-news-a9fbb.firebaseapp.com",
  projectId: "dragon-news-a9fbb",
  storageBucket: "dragon-news-a9fbb.firebasestorage.app",
  messagingSenderId: "1092909781911",
  appId: "1:1092909781911:web:d0aeabe118c4f56b6a2ad2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);