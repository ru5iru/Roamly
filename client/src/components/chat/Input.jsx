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

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log("hi")

  const handleSend = async () => {
    const ar = data.chatId.split('@');
    const first = ar[0];
    const second = ar[1];

    const chatId2 = second + '@' + first;

    // // const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
    const chatDocRef = doc(db, 'chats', data.chatId);
    const chatDocSnap = await getDoc(chatDocRef);
    const chatDocRef2 = doc(db, 'chats', chatId2);
    const chatDocSnap2 = await getDoc(chatDocRef2);
    // console.log(data.chatId)
    // let chatDocRef;
    // let chatDocSnap;
    let chatId;

    if (!chatDocSnap.exists() && !chatDocSnap2.exists()) {
      console.log("hi2")
      console.log(chatDocSnap.exists())
      console.log(chatDocSnap2.exists())
      chatId=data.chatId
      await setDoc(chatDocRef, {
                messages: [
                  {
                    id: uuid(),
                    text,
                    senderId: currentUser.email,
                    date: Timestamp.now(),
                    // img: downloadURL,
                  },
                ],
              });
      
    } else if (chatDocSnap.exists() && !chatDocSnap2.exists()){
      console.log("hi3")
      chatId=data.chatId
      await updateDoc(chatDocRef, {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.email,
          date: Timestamp.now(),
          // img: downloadURL,
        }),
      });

    }else /* if (!chatDocSnap.exists() && chatDocSnap2.exists())*/{
      chatId=chatId2
      console.log("hi4")
      await updateDoc(chatDocRef2, {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.email,
          date: Timestamp.now(),
          // img: downloadURL,
        }),
      });

    }
    
    //   if(chatDocSnap2.exists()) {
    //     chatId = chatId2
    //     chatDocRef = doc(db, 'chats', chatId2);
    //     chatDocSnap = await getDoc(chatDocRef);
    //     console.log("chatId2")
    //   }else{
    //     chatId = data.chatId
    //     chatDocRef = doc(db, 'chats', data.chatId);
    //     chatDocSnap = await getDoc(chatDocRef);
    //     console.log("data.chatId")
    //   }
    // }

    // try {
     
      // if (Img) {
      //   const storageRef = ref(storage, uuid());
      //   // const uploadTask = uploadBytesResumable(storageRef, Img);

      //   // const uploadTaskSnapshot = await uploadTask;

      //   if (uploadTaskSnapshot.state === 'success') {
      //     const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
          
      //     if(chatDocSnap.exists()){
      //       console.log('yes')
      //       await updateDoc(chatDocRef, {
      //         messages: arrayUnion({
      //           id: uuid(),
      //           text,
      //           senderId: currentUser.email,
      //           date: Timestamp.now(),
      //           img: downloadURL,
      //         }),
      //       });
      //     } else {
        //       await setDoc(chatDocRef, {
        //         messages: [
        //           {
        //             id: uuid(),
        //             text,
        //             senderId: currentUser.email,
        //             date: Timestamp.now(),
        //             img: downloadURL,
        //           },
        //         ],
        //       });
        //     // }
        //   }
        // }else {
        //   if(chatDocSnap.exists()){
        //     await updateDoc(chatDocRef, {
        //       messages: arrayUnion({
        //         id: uuid(),
        //         text,
        //         senderId: currentUser.email,
        //         date: Timestamp.now(),
        //         // img: downloadURL,
        //       }),
        //     });
        //   } else {
        //       await setDoc(chatDocRef, {
        //         messages: [
        //           {
        //             id: uuid(),
        //             text,
        //             senderId: currentUser.email,
        //             date: Timestamp.now(),
        //             // img: downloadURL,
        //           },
        //         ],
        //       });
        // }
        // console.log(chatId)
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
        });
      

      setText('');
      setImg(null);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  // const handleSend = async () => {
  //   if (img) {
  //     const storageRef = ref(storage, uuid());

  //     const uploadTask = uploadBytesResumable(storageRef, img);

  //     uploadTask.on(
  //       (error) => {
  //         console.log(error)
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           await updateDoc(doc(db, "chats", data.chatId), {
  //             messages: arrayUnion({
  //               id: uuid(),
  //               text,
  //               senderId: currentUser.id,
  //               date: Timestamp.now(),
  //               img: downloadURL,
  //             }),
  //           });
  //         });
  //       }
  //     );
  //   } else {
  //     await updateDoc(doc(db, "chats", data.chatId), {
  //       messages: arrayUnion({
  //         id: uuid(),
  //         text,
  //         senderId: currentUser.id,
  //         date: Timestamp.now(),
  //       }),
  //     });
  //   }

  //   await updateDoc(doc(db, "userChats", currentUser.id), {
  //     [data.chatId + ".lastMessage"]: {
  //       text,
  //     },
  //     [data.chatId + ".date"]: serverTimestamp(),
  //   });

  //   await updateDoc(doc(db, "userChats", data.user.id), {
  //     [data.chatId + ".lastMessage"]: {
  //       text,
  //     },
  //     [data.chatId + ".date"]: serverTimestamp(),
  //   });

  //   setText("");
  //   setImg(null);
  // };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <img src={attach} alt="" />
        <input
          type="file"
          style={{ display: 'none' }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );

  }
export default Input;
