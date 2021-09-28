import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_jVFzBQfY0HRUmGAQPEaHhRD1u3F97LA",
  authDomain: "intellihack.firebaseapp.com",
  projectId: "intellihack",
  storageBucket: "intellihack.appspot.com",
  messagingSenderId: "63267258284",
  appId: "1:63267258284:web:70a6e5aa2a67988717c409",
};

const app = Firebase.initializeApp(firebaseConfig);

export const storage = app.storage();
export const firestore = app.firestore();
