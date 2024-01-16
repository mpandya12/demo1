import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./styleEmjio.css";
import { FaSmile } from "react-icons/fa";
import { ReactionBarSelector } from "@charkour/react-reactions";
//when i select rection after that selected  reaction show me
function EmojiPickers() {
  const [isopen, setopen] = useState(false);
  const [text, settext] = useState("");
  const [ishovermessage, setishovermessage] = useState(false);
  const [selectedEmoji, setselectedEmoji] = useState(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isrection, SetisReaction] = useState([
    { label: "haha", node: <div>😄</div>, key: "smile", count: 0 },
    { label: "wow", node: <div>😮</div>, key: "wow", count: 0 },
    { label: "sad", node: <div>😢</div>, key: "sad", count: 0 },
    { label: "done", node: <div>👍</div>, key: "done", count: 0 },
    { label: "love", node: <div>❤️</div>, key: "love", count: 0 },
  ]);
  const mouseEnter = () => {
    setishovermessage(true);
  };
  const mouseOut = () => {
    setishovermessage(false);
  };

  const inputref = useRef(null);
  const emojiOpen = () => {
    setopen(!isopen);
  };
  const textchange = (e) => {
    settext(e.target.value);
    console.log(text);
  };
  //selected emoji when user select the reaction
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const updatedMessages = [...messages, { text: newMessage, sender: "user" }];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  const onClickEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    const ref = inputref.current;
    ref.focus();
    console.log(ref.focus());
    const selectionStart = ref.selectionStart;
    const selectionEnd = ref.selectionEnd;
    setNewMessage(
      (prevtext) =>
        prevtext.substring(0, selectionStart) +
        emoji +
        prevtext.substring(selectionEnd)
    );

    console.log(codesArray);
  };
  //when user send this emjio code to bankend and after user show in frontend with is go code number or emjio
  //handel Reaction

  const handelselectionClick = (reactionKey) => {
    SetisReaction((prevReactions) =>
      prevReactions.map((reaction) =>
        reaction.key === reactionKey
          ? { ...reaction, count: reaction.count + 1 }
          : reaction
      )
    );
    const findSelected = isrection.find(
      (reaction) => reaction.key === reactionKey
    );
    console.log(findSelected);

    setselectedEmoji(findSelected.node);
  };

  return (
    <>
      <div className="box">
        <nav>
          <h2 style={{ color: "#db1fe9", marginTop: "10px" }}>EmojiPicker</h2>
        </nav>
        <div className="box2"></div>
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseOut}>
          <div className="message-container">
            <div>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.sender}`}
                  style={{ backgroundColor: "blueviolet" }}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {selectedEmoji && <p>{selectedEmoji}</p>}

            {ishovermessage && (
              <ReactionBarSelector
                className="ReactionBar"
                iconSize={15}
                reactions={isrection}
                onSelect={handelselectionClick}
              />
            )}
          </div>
        </div>

        {/* my selected emjio display in message box left side conner */}
        <div className="box2">
          <div className="inputbox">
            <input
              ref={inputref}
              className="inpuxstyle"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />

            <button onClick={handleSendMessage}>Send</button>
          </div>

          <FaSmile
            className="FaSmile"
            style={{
              marginLeft: "5px",
              width: "80px",
              height: "40px",
              color: "blueviolet",
            }}
            onClick={emojiOpen}
          />
          {isopen && (
            <EmojiPicker
              className="Picker"
              onEmojiClick={onClickEmoji}
              searchDisabled={true}
              skinTonesDisabled={true}
              SuggestionMode={false}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default EmojiPickers;

//give me look like whatsapp
