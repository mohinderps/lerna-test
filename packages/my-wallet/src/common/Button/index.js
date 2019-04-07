import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: ${props => props.width ? props.width : '100%'}
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.6 : 1};
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.primary ? props.theme.primary: props.theme.white};
    color: ${props => props.primary ? props.theme.white: props.theme.primary };
    font-size: 1.25em;
    font-weight: 500;
`;

const Button = ({children, disabled, handleClick, primary, width}) => (
    <StyledButton
        disabled={disabled}
        onClick={handleClick}
        primary={primary}
        width={width}
    >
        {children}
    </StyledButton>
);

export default Button;