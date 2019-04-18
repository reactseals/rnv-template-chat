import FirebaseCon from '../Connection';

const COLLECTION_NAME = 'chats';
const CHILD_OLLECTION_NAME = 'messages';

class Chat {
  generateChatId(senderUID, receiverUID) {
    return senderUID > receiverUID ? `${senderUID}_${receiverUID}` : `${receiverUID}_${senderUID}`;
  }
};

export default Chat;
