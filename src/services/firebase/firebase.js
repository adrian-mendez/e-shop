import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEXPkj5j0lTjfQeIvrWbsFrDgtH-JkHO4",
    authDomain: "ecommerce-coderhouse-9a23d.firebaseapp.com",
    projectId: "ecommerce-coderhouse-9a23d",
    storageBucket: "ecommerce-coderhouse-9a23d.appspot.com",
    messagingSenderId: "299128645282",
    appId: "1:299128645282:web:bb1446f69fe5b5b5a359fb"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => {
      return app
  }

  export const db = getFirestore(app);