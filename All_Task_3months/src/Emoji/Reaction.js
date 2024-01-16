import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./styleEmjio.css";
import { FaSmile } from "react-icons/fa";
import { ReactionBarSelector } from "@charkour/react-reactions";

function EmojiPickers() {
  const [isopen, setopen] = useState(false);
  const [text, settext] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [reactions, setReactions] = useState([
    { label: "haha", emoji: "😄", key: "smile", count: 0 },
    { label: "wow", emoji: "😮", key: "wow", count: 0 },
    { label: "sad", emoji: "😢", key: "sad", count: 0 },
  ]);

  const inputref = useRef(null);

  const mouseEnter = () => {
    // Handle mouse enter event
  };

  const mouseOut = () => {
    // Handle mouse out event
  };

  const emojiOpen = () => {
    setopen(!isopen);
  };

  const textchange = (e) => {
    settext(e.target.value);
  };

  const onClickEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);

    const ref = inputref.current;
    ref.focus();

    const selectionStart = ref.selectionStart;
    const selectionEnd = ref.selectionEnd;

    settext(
      (prevtext) =>
        prevtext.substring(0, selectionStart) +
        emoji +
        prevtext.substring(selectionEnd)
    );

    setSelectedEmoji(emoji);
  };

  const handelselectionClick = (reactionKey) => {
    setReactions((prevReactions) =>
      prevReactions.map((reaction) =>
        reaction.key === reactionKey
          ? { ...reaction, count: reaction.count + 1 }
          : reaction
      )
    );
  };
  const selectedReaction = Isrection.find((reaction) => reaction.key === reaction);
  setSelectedEmoji(selectedReaction)

  return (
    <>
      <div className="box">
        <nav>
          <h2 style={{ color: "#db1fe9", marginTop: "10px" }}>EmojiPicker</h2>
        </nav>
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseOut}>
          <p
            style={{
              border: "1px solid white",
              width: " fit-content",
              color: "white",
              marginTop: "50px",
              borderRadius: "5px",
            }}
          >
            message from manushi
          </p>
        </div>

        <div className="box2">
          <div className="inputbox">
            <input
              ref={inputref}
              className="inpuxstyle"
              value={text}
              onChange={textchange}
            />

            <FaSmile
              style={{
                marginLeft: "5px",
                width: "80px",
                height: "40px",
                color: "blueviolet",
              }}
              onClick={emojiOpen}
            />
          </div>
          {isopen && (
            <EmojiPicker
              className="Picker"
              onEmojiClick={onClickEmoji}
              searchDisabled={true}
              skinTonesDisabled={true}
              SuggestionMode={false}
            />
          )}

          <div style={{ marginTop: "15px" }}>
            {selectedEmoji && (
              <div>
                <p>Selected Emoji: {selectedEmoji}</p>
              </div>
            )}
            <ReactionBarSelector
              className="ReactionBar"
              iconSize={15}
              style={{ marginLeft: "120px", marginTop: "15px" }}
              reactions={reactions}
              onSelect={handelselectionClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmojiPickers;
