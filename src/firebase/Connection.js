import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../config/db';

let instance = null;

class Connection {
  constructor() {
    if (!instance) {
      this.connection = firebase.initializeApp(config);
      instance = this;
    }

    return this;
  }

  get con() {
    return this.connection;
  }

  get firestore() {
    const firestore = this.con.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);

    return firestore;
  }
}

const FirebaseCon = new Connection();

export default FirebaseCon;
