import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const StyledModalInner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

const StyledModalContent = styled.div`
    position: fixed;
    background: white;
    width: 500px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 5px;
`;

const Header = styled.div`
    text-align: right;
`;

const Body = styled.div`
    padding: 20px;
`;

const Action = styled.div`
    cursor: pointer;
`;

const ModalInner = ({closeModal, children}) => (
    <StyledModalInner onClick={closeModal}>
        <StyledModalContent onClick={e => e.stopPropagation()}>
            <Header>
                <Action onClick={closeModal}>
                    <FaTimes />
                </Action>
            </Header>
            <Body>
                {children}
            </Body>
        </StyledModalContent>
    </StyledModalInner>
);

const Modal = (props) => ReactDOM.createPortal(
    <ModalInner {...props}/>, document.getElementById('modal'))

export default Modal;