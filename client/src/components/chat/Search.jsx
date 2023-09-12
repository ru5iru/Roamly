import React, { useContext, useState } from 'react'
import './messenger.scss'
import { collection, query, where, getDocs, setDoc, doc, updateDoc, getDoc, serverTimestamp} from "firebase/firestore";
import {db} from '../../../src/firebase'
import { AuthContext } from "../../context/authContext";
// import { Await } from 'react-router-dom';


const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState("null")
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext);

  const [firstName, lastName] = username.split(' ');
  
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("firstname", "==", firstName),
      where("lastname", "==", lastName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const arr1 = currentUser.email.split('.');
    const arr2 = user.email.split('.')
    console.log(arr1[0]);
    const combinedemails = arr1[0] + arr2[0];
    console.log(combinedemails)
    
    try {
      const docRef = doc(db, "chats", combinedemails);
      const res = await getDoc(docRef);
      
      if (!res.exists()) {
        await setDoc(docRef, { messages: [] });
        
        await updateDoc(doc(db, "userChats", currentUser.email), {
          [combinedemails + ".userInfo"]: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
          [combinedemails + ".date"]: serverTimestamp(),
        });
  
        await updateDoc(doc(db, "userChats", user.email), {
          [combinedemails + ".userInfo"]: {
            firstname: currentUser.firstname,
            lastname: currentUser.lastname,
            email: currentUser.email,
          },
          [combinedemails + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setErr(true);
    }
    setUser(null)
    setUsername("")
  };
  

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      
      {user && (
        <div className="userChat" onClick={handleSelect} >
          <img src={user.profile_pic} />
          <div className="userChatInfo">
            <span>{user.firstname} {user.lastname}</span>
          </div>
        </div>
      )}
      {err && <span>User not found!</span>}
    </div>
  );
};

export default Search;

