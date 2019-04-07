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
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Action = styled.div`
    cursor: pointer;
`;

const ModalInner = ({closeModal, title, children}) => (
    <StyledModalInner onClick={closeModal}>
        <StyledModalContent onClick={e => e.stopPropagation()}>
            <Header>
                {title}
                <Action onClick={closeModal}>
                    <FaTimes />
                </Action>
            </Header>
            <div>
                {children}
            </div>
        </StyledModalContent>
    </StyledModalInner>
);

const Modal = (props) => ReactDOM.createPortal(
    <ModalInner {...props}/>, document.getElementById('modal'))

export default Modal;