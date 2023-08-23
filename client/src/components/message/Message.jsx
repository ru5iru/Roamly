import "./message.scss"

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOSr5OOBtR8OSLdYt8UdO1aKC1OWHAbXU1A&usqp=CAU" 
        alt="" />
        <p className="messageText">Hello this is a message</p>
      </div>
      
      <div className="messageBottom">
        1 hour ago
      </div>
    </div>
  )
}
