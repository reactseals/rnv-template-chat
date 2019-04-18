import FirebaseCon from '../Connection';

const COLLECTION_NAME = 'users';

class User {

  constructor() {
      this.ref = FirebaseCon.firestore.collection(COLLECTION_NAME);
  }

  addNew(data) {
    return FirebaseCon.con
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(response => {
        data['uid'] = response.user.uid;
        return this.addUserDoc(data)
          .then(() => {
            return { status: true }
          })
          .catch(error => {
            return { status: false, msg: error }
          });
        ;
      })
      .catch(error => {
        return { status: false, msg: error.message }
      });
  }

  addUserDoc(data) {
    return this.ref
      .doc(data.uid)
      .set({
        id: data.uid,
        username: data.username,
        email: data.email,
        last_logged_in: new Date().now()
      })
      .then(() => { return { status: true } })
      .catch(error => { return {status: false, msg: error } });
  }

  usernameExists(username) {
    return this.ref
      .where("username", "==", username)
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs[0] && querySnapshot.docs[0].exists ? true : false;
      })
      .catch(error => false);
  }

  newUsersListenerRef() {
    return this.ref.orderBy('username');
  }

  getById(id) {
    return this.ref
      .doc(id)
      .get()
      .then((doc) => doc.exists ? doc.data() : null);
  }

  getCurrentUser() {
    return this.ref
      .doc(FirebaseCon.con.auth().currentUser.uid)
      .get()
      .then((doc) => doc.exists ? doc.data() : null);
  }
}

export default User;
