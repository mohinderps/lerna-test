import React from 'react';
import styled from 'styled-components';
import Label from '../Label';

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.border};
    border-radius: 4px;
    cursor: default;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: 0;
    font-size: 16px;
    padding: 0 8px;
    color: ${props => props.theme.black};

    &::placeholder {
        color: ${props => props.theme.placeholder};
    }
`;

const CodeInput = ({setCode, value, label}) => (
    <React.Fragment>
        <Label>{label}</Label>
        <StyledInput
            value={value}
            onChange={e => setCode(e.target.value)}
            placeholder="CVV"
        />
    </React.Fragment>
)

export default CodeInput;