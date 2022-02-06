import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
    if (props.href) {
        return (
            <a variant={`outline-danger ${props.inverse && 'Danger'} ${props.danger && 'Danger'} `}
            href={props.href}
            >
                {props.children}
            </a>
        );
    }
    if (props.to){
        return (
            <Link
            to={props.to}
            exact={props.exact}
            variant={`outline-danger ${props.inverse && 'Danger'} ${props.danger && 'Danger'}`}
            >
                {props.children}
            </Link>
        );
    }
    return (
        <button 
        variant={`outline-danger ${props.inverse && 'Danger'} ${props.danger && 'Danger'}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;