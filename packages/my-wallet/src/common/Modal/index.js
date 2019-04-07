import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

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
    width: 600px;
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
    padding: 10px 20px 30px 20px;
`;

const Action = styled.div`
    cursor: pointer;
`;

const ModalInner = ({closeModal, children}) => (
    <StyledModalInner onClick={closeModal}>
        <StyledModalContent onClick={e => e.stopPropagation()}>
            <Header>
                <Action onClick={closeModal}>
                    <IconContext.Provider value={{color: '#9e9e9e'}}>
                        <FaTimes />
                    </IconContext.Provider>
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