import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
  
  export const ChatContext = createContext();


  export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };

    const checkChatIdExists = async (chatId) => {
      console.log("chatId FROM EXIST FUNC :"+chatId)
      const docRef = doc(db, "chats", chatId);
      const res = await getDoc(docRef);
      if (res.exists()){
        console.log(true)       
        return true;
      }else {
        console.log(false)       
        return false;
      }
    };

    const chatReducer = (state, action) => {
      switch (action.type) {
        case "CHANGE_USER":
          const ar1 = currentUser.email.split('.');
          const ar2 = ar1[0].split('@');
          const arr1 = action.payload.email.split('.')
          const arr2 = arr1[0].split('@')
          const id1 = ar2[0] + "@" + arr2[0];
          const id2 = arr2[0] + "@" + ar2[0];
          // console.log(checkChatIdExists(id2) )
          // console.log(checkChatIdExists(id1) )
          return {
            user: action.payload,
            chatId: (!checkChatIdExists(id1)) ? id2  : id1,          
          
          };
  
        default:
          return state;
      }
    };
  
  
    // const chatReducer =(state, action) => {
    //   let chatId;
    
    //   switch (action.type) {
    //     case "CHANGE_USER":
    //       const ar1 = currentUser.email.split('.');
    //       const ar2 = ar1[0].split('@');
    //       const arr1 = action.payload.email.split('.')
    //       const arr2 = arr1[0].split('@')
    //       const id1 = ar2[0] + "@" + ar2[0];
    //       const id2 = arr2[0] + "@" + ar2[0];
    
    //       if (checkChatIdExists(id2)) {
    //         console.log("id2: " + id2)
    //         chatId = id2;
    //       } else if (checkChatIdExists(id1)) {
    //         console.log("id1: " + id1)
    //         chatId = id1;
    //       } else {
    //         console.log("id1 and id2 do not exist")
    //         chatId = id1;
    //       }
    //       return {
    //         user: action.payload,
    //         chatId,
    //       };
    
    //     default:
    //       return state;
    //   }
    // };
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };