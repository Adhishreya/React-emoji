import React, { useState } from "react";
// import { findDOMNode } from "react-dom";
import "./styles.css";
const dict = {
  "🚣": "Person Rowing Boat",
  "🌋": "Volcano",
  "🏫": "School",
  "🏬": "Department Store",
  "🏭": "Factory",
  "🏯": "Japanese Castle",
  "🎠": "Carousel Horse",
  "🎡": "Ferris Wheel",
  "🎢": "Roller Coaster",
  "🚂": "Locomotive",
  "🗼": "Tokyo Tower",
  "🗽": "Statue of Liberty",
  "🚒": "Fire Engine",
  "🚓": "PoliceCar"
};
var emojis = Object.keys(dict);
function App() {
  const [inp, ch_inp] = useState("");
  const [mean, ch_mean] = useState("u'll get the meaning here");
  function userInput(ev) {
    var inputs = ev.target.value;
    ch_inp(inputs);
    console.log(inp);
    var meaning = "";
    if (inputs in dict) {
      meaning = "This is " + dict[inputs];
    } else if (inputs === "") meaning = "translation will appear here";
    else {
      meaning = "Oops we don't know what that is!!!";
    }

    ch_mean(meaning);
  }
  function findEmoji(value) {
    // console.log(value);
    var meaning = dict[value];
    ch_mean("It's a " + meaning);
  }

  return (
    <div className="App">
      <input onChange={userInput}></input>
      <h1>{mean}</h1>
      <h1 className="emojis">
        {emojis.map((emoji, index) => {
          return (
            <span key={index} onClick={() => findEmoji(emoji)}>
              {emoji}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
export default App;
