# Using this project
To use this make a new file with the name `firebase.js` in the `src` directory. 
Get your `projectId`,`appId` and `apiKey` from the [Firebase Console](https://console.firebase.google.com)
> firebase.js
> This is how the file should look
```javascript
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
let firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};
firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();
export default database;
```

It's a CRA Project that hasn't yet been ejected so feel free to use it :grin:

Has a navbar + sidebar material-ui combo
Fully furnished with firebase storage, firebase auth and firebase cloud firestore implementation (just add a `firebase.js` file in `src`)

Has a new method to solve questions that are on the web, basically try to understand how many questions a pdf has and generate those many radio
buttons with the corresponding options ['A', 'B', 'C', 'D'] on the right side. 





:+1: this repo, Rishabh Anand.