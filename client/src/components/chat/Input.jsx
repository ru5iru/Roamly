import React, { useContext, useState } from 'react';
import './messenger.scss';
import attach from '../../assets/images/attachment.png';
import Img from '../../assets/images/imageicon.png';
import { AuthContext } from '../../context/authContext';
import { ChatContext } from '../../context/ChatContext';
import {
  Timestamp,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../../src/firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import send from '../../assets/sent.png'

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    const ar = data.chatId.split('@');
    const first = ar[0];
    const second = ar[1];
    const chatId2 = second + '@' + first;

    let chatId;
    let chatDocSnap;
    let chatDocSnap2;

    try {
      const chatDocRef = doc(db, 'chats', data.chatId);
      chatDocSnap = await getDoc(chatDocRef);
      const chatDocRef2 = doc(db, 'chats', chatId2);
      chatDocSnap2 = await getDoc(chatDocRef2);

      if (!img) {
        if (!chatDocSnap.exists() && !chatDocSnap2.exists()) {
          // Create a new chat document if it doesn't exist
          chatId = data.chatId;
          await setDoc(chatDocRef, {
            messages: [
              {
                id: uuid(),
                text,
                senderId: currentUser.email,
                date: Timestamp.now(),
              
              },
            ],
          });
        } else if (chatDocSnap.exists() && !chatDocSnap2.exists()) {
          // Add a text message to an existing chat document
          chatId = data.chatId;
          await updateDoc(chatDocRef, {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.email,
              date: Timestamp.now(),
          
            }),
          });
        } else {
          // Add a text message to the other user's chat document
          chatId = chatId2;
          await updateDoc(chatDocRef2, {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.email,
              date: Timestamp.now(),
            
            }),
          });
        }
      } else {
        // Handle sending messages with images
        const imageRef = ref(storage, 'images/' + uuid()); 
        const uploadTask = uploadBytesResumable(imageRef, img);

        uploadTask.on('state_changed', (snapshot) => {
          // Track the upload progress 
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        });

        await uploadTask;

        const downloadURL = await getDownloadURL(imageRef);

        if (!chatDocSnap.exists() && !chatDocSnap2.exists()) {
          // Create a new chat document with an image message
          chatId = data.chatId;
          await setDoc(chatDocRef, {
            messages: [
              {
                id: uuid(),
                text,
                senderId: currentUser.email,
                date: Timestamp.now(),
                img: downloadURL,
               
              },
            ],
          });
        } else if (chatDocSnap.exists() && !chatDocSnap2.exists()) {
          // Add an image message to an existing chat document
          chatId = data.chatId;
          await updateDoc(chatDocRef, {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.email,
              date: Timestamp.now(),
              img: downloadURL,
           
            }),
          });
        } else {
          // Add an image message to the other user's chat document
          chatId = chatId2;
          await updateDoc(chatDocRef2, {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.email,
              date: Timestamp.now(),
              img: downloadURL,
           
            }),
          });
        }
      }

      // Update last message and date in userChats for both users
      await updateDoc(doc(db, 'userChats', currentUser.email), {
        [chatId + '.lastMessage']: {
          text,
        },
        [chatId + '.date']: serverTimestamp(),
      });

      await updateDoc(doc(db, 'userChats', data.user.email), {
        [chatId + '.lastMessage']: {
          text,
        },
        [chatId + '.date']: serverTimestamp(),

        [chatId + '.unreadmessages']: true,
      });

      // Clear input fields
      setText('');
      setImg(null);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error here (e.g., show an error message to the user)
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="      Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        {/* <img src={attach} alt="" /> */}
        <input
          type="file"
          style={{ display: 'none' }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />

        </label>
        <button onClick={handleSend}><img src={send} alt="" /></button>
      </div>
    </div>
  );
};

export default Input;
