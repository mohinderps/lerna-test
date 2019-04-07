import React from 'react';
import styled from 'styled-components';
import PaymentIcons from '../../constants/paymentIcons';
import Label from '../../common/Label';
import {formatCardNumber} from '../../constants/formats';

const StyledDiv = styled.div`
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.border};
    height: 70px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25em;
    min-width: 275px;
    margin-right: 20px;
`;

const CardNumber = styled.div`
    flex-grow: 1
`;

const CardImage = styled.img`
    width: 40px;
    height: 30px;
    margin-left: 10px;
    flex-grow: 0;
`;

const AddedCard = ({number, card}) => (
    <StyledDiv>
        <CardNumber>
            <Label>Card Number</Label>
            <div>{formatCardNumber(number, card)}</div>
        </CardNumber>
        <CardImage src={PaymentIcons[card.type]} alt={`${card.niceType} Payment Icon`} />
    </StyledDiv>
);

export default AddedCard;