import React from 'react';
import {useState} from 'react';

function Button (props){
    let {
        onClick = ()=>{},
        authorized = false
    } = props;
    return(
        <>
        <button onClick={onClick} disabled={authorized}>Authorized</button>
        </>
    )

}

export default Button;