import React from 'react';
import styled from 'styled-components';
import Label from '../Label';
import PaymentIcons from '../../constants/paymentIcons';
import {formatCardNumber, rawNumber} from '../../constants/formats';

const Container = styled.div`
    width: 100%;
    height: 45px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.border};
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
`;

const StyledInput = styled.input`
    cursor: text;
    outline: 0;
    border: 0;
    font-size: 16px;
    color: ${props => props.theme.black};
    flex-grow: 1;

    &::placeholder {
        color: ${props => props.theme.placeholder};
    }

`;

const CardImage = styled.img`
    width: 40px;
    height: 25px;
    margin-left: 10px;
    flex-grow: 0;
`;


const NumberInput = ({setNumber, value, label, card}) => {
    return (
        <React.Fragment>
            <Label>{label}</Label>
            <Container>
                <StyledInput
                    value={formatCardNumber(value, card)}
                    onChange={e => setNumber(rawNumber(e.target.value))}
                    placeholder="Enter Debit / Credit Card Number"
                />
                {card && card.type && <CardImage src={PaymentIcons[card.type]} />}
            </Container>
        </React.Fragment>
    )
}

export default NumberInput;