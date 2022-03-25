import React, { useState } from "react";

export default function Tabs() {
  const tabs = [
    {
      lang: "english",
      text: "Hello world",
      focused: true
    },
    {
      lang: "French",
      text: "hello world in french",
      focused: false
    },

    {
      lang: "German",
      text: "hello world in german",
      focused: false
    },
  ];
  const [lang, setLang] = useState();
  const [text, setText] = useState();

  
  return (
    <div id="tabs">
      <ul>
        {tabs.map((tabs, i) => (
          <li className={tabs.focused === true ? 'focus' :''} key={i}>{tabs.lang}</li>
        ))}
        ;<p>{tabs.focus === true ? tabs[i].text :'error'}</p>
      </ul>
    </div>
  );
}
