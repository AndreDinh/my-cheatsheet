import React from 'react';
import {useState} from 'react';

function Button (props ){
    const [authorized, clickedAuthorized] = useState(false);
    
    const authorizedHandler = () => {
        clickedAuthorized(true);
        console.log('you are authorized');
    };
    return(
        <>
        <button onClick={authorizedHandler} isAuthorized={props.authorized}>Authorized</button>
        </>
    )

}

export default Button;