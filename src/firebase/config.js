import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9-i2ERhx_YlOc3pwt1qougdT3fWLfIHU',
  authDomain: 'readinglistapp-58021.firebaseapp.com',
  projectId: 'readinglistapp-58021',
  storageBucket: 'readinglistapp-58021.appspot.com',
  messagingSenderId: '921752630724',
  appId: '1:921752630724:web:99d26882793602c4d42091',
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

export {db};
