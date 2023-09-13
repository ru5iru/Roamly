import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { AuthContext } from "./authContext";
  
  export const ChatContext = createContext();
  
  export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
      chatId: "null",
      user: {},
    };
  
    const chatReducer = (state, action) => {
      const arr1 = currentUser.email.split('.');
      // const arr2 = user.email.split('.')
      const arr2 = action.payload.email.split('.');
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user: action.payload,    
            chatId: arr1[0] + arr2[0]
          };
  
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