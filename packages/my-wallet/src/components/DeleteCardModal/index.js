import React from 'react';
import Modal from '../../common/Modal'

const DeleteCardModal = ({closeModal, removeCard}) => (
    <div>
        <Modal closeModal={closeModal} title="Delete Card"/>
    </div>
);

export default DeleteCardModal;