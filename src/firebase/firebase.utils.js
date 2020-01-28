import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyATbPBl6s2KJzvYM8qnpXJOWinHpKfTZRA",
    authDomain: "shopping-db-c95af.firebaseapp.com",
    databaseURL: "https://shopping-db-c95af.firebaseio.com",
    projectId: "shopping-db-c95af",
    storageBucket: "shopping-db-c95af.appspot.com",
    messagingSenderId: "15071756365",
    appId: "1:15071756365:web:636d3e5f028e2da91ddc04",
    measurementId: "G-4BYP0HTLJ5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user',err.message);
            
        }
    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider =  new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase