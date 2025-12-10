import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7VhVkx0VktW5fNzGco9lQp-uJv9Bo1kk",
  authDomain: "promptshield-a9574.firebaseapp.com",
  projectId: "promptshield-a9574",
  storageBucket: "promptshield-a9574.firebasestorage.app",
  messagingSenderId: "945576318198",
  appId: "1:945576318198:web:2bed687cde3a49b7b688d7"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}