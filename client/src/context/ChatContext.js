import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./authContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
  
  export const ChatContext = createContext();
  
  // export const ChatContextProvider = ({ children }) => {
  //   const { currentUser } = useContext(AuthContext);
  //   const INITIAL_STATE = {
  //     chatId: "null",
  //     user: {},
  //   };

    
  
  //   const chatReducer = (state, action) => {
  
  //     // switch (action.type) {
  //     //   case "CHANGE_USER":
  //     //     const arr1 = currentUser.email.split('.');
  //     //     const arr2 = action.payload.email.split('.')
  //     //     // console.log(arr1[0]);

  //     //     let id;
  //     //     id = arr1[0] + arr2[0];

  //     //     const docRef = doc(db, "chats", id);
  //     //     const res = await getDoc(docRef);
          
  //     //     if (!res.exists()) {
  //     //       id = arr2[0] + arr1[0];
  //     //       const docRef2 = doc(db, "chats", id);
  //     //       const res2 = await getDoc(docRef2);
            
  //     //       if (!res2.exists()) {
  //     //         id = arr1[0] + arr2[0];

  //     //       }else{
  //     //         id = arr2[0] + arr1[0];
  //     //       }
  //     //     }else{
  //     //       id = arr1[0] + arr2[0];
  //     //     }
  //     //     return {
  //     //       user: action.payload,
  //     //       chatId: id,
  //     //     };

  //     switch (action.type) {
  //       case "CHANGE_USER":
  //         return {
  //           user: action.payload,
  //           chatId: action.payload.id + currentUser.id,
  //         };
  
  //       default:
  //         return state;
  //     }

      
  //   };
  
  //   const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
  //   return (
  //     <ChatContext.Provider value={{ data:state, dispatch }}>
  //       {children}
  //     </ChatContext.Provider>
  //   );
  // };

  


  export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };

    const checkChatIdExists = async (chatId) => {
      const docRef = doc(db, "chats", chatId);
      const res = await getDoc(docRef);
      if (res.exists()){
        return true;
      }else {
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
          const id2= arr2[0] + "@" + ar2[0];
  
          if (checkChatIdExists(id1)) {
            console.log("id1")
            return {
              user: action.payload,
              chatId: id1,
              // chatId2:id2,
            };
          } else {
            if(checkChatIdExists(id2)) {
              console.log("id2")
              return {
                user: action.payload,
                chatId: id2,
                // chatId2:id1,
              };
            }else{
              
              console.log("id1,id2")
              return {
                user: action.payload,
                chatId: id1,
                // chatId: id2
              };
            }
          }
  
        default:
          return state;
      }
    };
  
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };