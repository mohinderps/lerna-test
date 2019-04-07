import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: ${props => props.width ? props.width : '100%'}
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
    border-color: ${props => props.theme.primary};
    background-color: ${props => props.primary ? props.theme.primary: props.theme.white};
    color: ${props => props.primary ? props.theme.white: props.theme.primary };
`;

const Button = ({children, disabled, handleClick, primary}) => (
    <StyledButton
        disabled={disabled}
        onClick={handleClick}
        primary={primary}
    >
        {children}
    </StyledButton>
);

export default Button;