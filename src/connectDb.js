// Import tools from firebase
// import { firestore } from 'firebase-admin';
import { initializeApp, getApps, cert  } from 'firebase-admin/app';
// Import firestore from firebase
import {getFirestore} from 'firebase-admin/firestore';
// Import my credentials to connect to firebase
import myCredentials from '../credentials.js';

// Write a function to connect to firebase
export default function connectDb() {
    // First check to see if we are already connected...
    if(getApps().length === 0){
            // If not, connect..
            initializeApp({
                credential: cert(myCredentials)
            });
    }
    // Either way...
    return getFirestore();
    // Return the connection to firestore
}
