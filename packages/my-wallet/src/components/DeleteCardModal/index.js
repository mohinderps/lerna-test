import React from 'react';
import styled from 'styled-components';
import Modal from '../../common/Modal';
import Heading from '../../common/Heading';
import PrimaryButton from '../../common/PrimaryButton';
import SecondaryButton from '../../common/SecondaryButton';

const Container = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.div`
    flex-grow: 1;

    &:nth-child(1) {
        margin-right: 10px;
    }

    &:nth-child(2) {
        margin-left: 10px;
    }
`;



const DeleteCardModal = ({closeModal, removeCard, number}) => (
    <Modal closeModal={closeModal} width="400px">
        <Heading center>Are you sure you want to delete this card?</Heading>
        <Container>
            <StyledButton>
                <PrimaryButton handleClick={() => {
                    removeCard(number);
                    closeModal()
                }}>OK</PrimaryButton>
            </StyledButton>
            <StyledButton>
                <SecondaryButton handleClick={closeModal}>Cancel</SecondaryButton>
            </StyledButton>
        </Container>
    </Modal>
);

export default DeleteCardModal;