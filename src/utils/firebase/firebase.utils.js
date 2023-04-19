import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDGq_E2jhhSuDIbUH-wXkjn1PcuRTSgHgY",
  authDomain: "crow-clothing-591d1.firebaseapp.com",
  projectId: "crow-clothing-591d1",
  storageBucket: "crow-clothing-591d1.appspot.com",
  messagingSenderId: "1095878926216",
  appId: "1:1095878926216:web:3992af95f090ae16a2243d"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch (error) {
      console.log('error creating the user', error.message);
    }
    return userDocRef;
  }
}

