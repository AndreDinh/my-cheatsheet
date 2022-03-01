import React from 'react';
import {useState} from 'react';

function Button (props ){
    const [authorized, clickedAuthorized] = useState(false);
    const counter = 1;
    const authorizedHandler = () => {
        clickedAuthorized(true);
        console.log('you are authorized');
        counter++;
    };
    return(
        <>
        <button onClick={authorizedHandler} isAuthorized={props.authorized}>Authorized</button>
        </>
    )

}

export default Button;