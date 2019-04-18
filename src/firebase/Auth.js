import FirebaseCon from './Connection';
import firebase from 'firebase/app';
import 'firebase/auth';

export const authProvider = (type) => {
  var provider = null;

  switch (type) {
    case 'google':
      provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().useDeviceLanguage();
      break;
    default:

  }

  return provider;
}
