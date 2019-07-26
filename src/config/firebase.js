import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './firebase-key-no-commit'

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

export default firebase