import FirebaseCon from '../Connection';

const COLLECTION_NAME = 'messages';
const PARENT_COLLECTION_NAME = 'chats';


class Message {
  constructor(chatID) {
    this.ref = FirebaseCon.firestore
      .collection(PARENT_COLLECTION_NAME)
      .doc(chatID)
      .collection(COLLECTION_NAME);
  }

  newMessagesListenerRef(chatID) {
    return this.ref
      .orderBy("timestamp");
  }

  unsubscribeMessagesListener(chatID) {
    var unsubscribe = this
      .newMessagesListenerRef(chatID)
      .onSnapshot(() => {});

    unsubscribe();
  }

  addNewMessage(chatID, sender, message) {
    this.ref
      .add({
        author: sender.username,
        text: message,
        seen: false,
        timestamp: Date.now()
      })
      .then(res => res)
      .catch(res => console.log(res));
  }
};

export default Message;
