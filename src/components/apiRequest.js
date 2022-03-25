import React from "react";
import { useState, useEffect } from "react";

export const List = (props) => {
  const [userData, userDataHandler] = useState([]);
  const [counter, setCounter] = useState(1);

  async function grabingData() {
    // const response = await fetch("https://randomuser.me/api/?results=50");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      console.error("Error");
    }

    const data = await response.json();

    if (Array.isArray(data.result)) {
      let newUser = data.results.map((userInfo, index) => {
        return {
          id: index,
          name: userInfo.name.first,
          email: userInfo.email,
        };
      });
      userDataHandler(newUser);
    }
    const newUser = {
      id: data.id,
      name: data.title,
      email: data.title,
    };

    userDataHandler(newUser);
  }

  async function postingData(something) {
    const response = await fetch("https://randomuser.me/api/?results=50", {
      method: "POST",
      body: JSON.stringify(something),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    grabingData();
  }, [counter]);

  return (
    <React.Fragment>
      <ul>
        {userData.map((data) => (
          <li key={data.id}>
            Hello {data.name} your email <strong>{data.email}</strong>
          </li>
        ))}
      </ul>
      <button onClick={() => setCounter(counter + 1)}>updated clicking </button>
    </React.Fragment>
  );
};

async function updateData(counter) {
  const response = await fetch(`https://randomuser.me/api/?page=${counter}`);

  if (!response.ok) {
    console.error("error");
  }
  console.log(response);
  const data = await response.json();
  let newUser = data.results.map((userInfo, index) => {
    return {
      id: index,
      name: userInfo.name.first,
      email: userInfo.email,
    };
  });
}
