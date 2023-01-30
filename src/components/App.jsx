import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(function (item) {
          return <Entry emoji={item.emoji} name={item.name} meaning={item.meaning} />
        })}
      </dl>
    </div>
  );
}

export default App;
