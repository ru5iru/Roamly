import React, { useContext, useState } from 'react'
import './messenger.scss'
import search from '../../assets/search.png';
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
    const ar1 = currentUser.email.split('.');
    const ar2 = ar1[0].split('@');
    const arr1 = user.email.split('.')
    const arr2 = arr1[0].split('@')
    const combinedId1 = ar2[0] + "@" + arr2[0];
    const combinedId2 = arr2[0] + "@" + ar2[0]; // Add this line
  
    try {
      const docRef1 = doc(db, "chats", combinedId1);
      const res1 = await getDoc(docRef1);
  
      const docRef2 = doc(db, "chats", combinedId2); // Add this line
      const res2 = await getDoc(docRef2); // Add this line
  
      console.log(res1.exists())
        console.log(res2.exists())
      if (!res1.exists() && !res2.exists()) {
        // Neither chat room exists, create one.
        
  
        await setDoc(docRef1, { messages: [] });
  
        await updateDoc(doc(db, "userChats", currentUser.email), {
          [combinedId1 + ".userInfo"]: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
          [combinedId1 + ".date"]: serverTimestamp(),
        });
  
        await updateDoc(doc(db, "userChats", user.email), {
          [combinedId1 + ".userInfo"]: {
            firstname: currentUser.firstname,
            lastname: currentUser.lastname,
            email: currentUser.email,
          },
          [combinedId1 + ".date"]: serverTimestamp(),
        });
      } else {
        // A chat room already exists for this pair of users.
        console.log("Chat room already exists for this pair of users.");
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
        <div className="searchInputContainer">
          {/* <img src={search} alt="" /> */}
          <input
            type="text"
            placeholder="  🔍  Find a user"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
      </div>
  
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.profile_pic} alt={user.firstname} />
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

