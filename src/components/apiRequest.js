import React from "react";
import { useState, useEffect, useCallback } from "react";

const List = (props) => {
  const [userData, userDataHandler] = useState([]);

  const grabingData = useCallback(async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    if (!response.ok) {
      console.error("Error");
    }
    const data = await response.json();
    let newUser = data.results.map((userInfo, index) => {
        return {
            id:index,
            name: userInfo.name.first,
            email: userInfo.email
        }
    });
    userDataHandler(newUser);
  }, []);

  const postingData = useCallback(async (something) => {
    const response = await fetch("https://randomuser.me/api/?results=50", {
        method:'POST',
        body: JSON.stringify(something),
        header:{
            'Content-Type':'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
  },[])

  useEffect(() => {
    grabingData();
  }, [grabingData]);



  return (
    <React.Fragment>
      <ul>
        {userData.map((data) => (
            <li key={data.id}>Hello {data.name} your email <strong>{data.email}</strong></li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
