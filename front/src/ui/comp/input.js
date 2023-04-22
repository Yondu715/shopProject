import React from 'react';
import '../../css/input.css'

const Input = (props) => {

    return (
            <input placeholder={props.text} type={props.type} onChange={props.onChange}/>
    );
};

export default Input;