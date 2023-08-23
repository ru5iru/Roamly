import Conversation from "../../components/conversations/Conversation";
import "./messenger.scss";

export default function Messenger() {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">box</div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">online</div>
      </div>
    </div>
  )
}
