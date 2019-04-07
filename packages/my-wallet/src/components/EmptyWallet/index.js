import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.gray};
    font-size: 1.25em;
`;

const EmptyWallet = () => (
    <StyledDiv>
        You Wallet is Empty. Click on the button to add card to your wallet.
    </StyledDiv>
);

export default EmptyWallet;