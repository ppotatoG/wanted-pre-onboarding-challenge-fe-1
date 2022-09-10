import React, {useState} from "react";
import Modal from 'react-modal';

import styles from '@styles/Home.module.scss'

const CustomModal = ({text} : any ) => {
    const [modalIsOpen, setIsOpen] = useState(true);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <p>{text}</p>
                <div className={styles.btn_wrap}>
                    <button className={styles.btn_wrap__item} onClick={closeModal}>확인 </button>
                </div>
            </Modal>
        </div>
    );
}

const customStyles = {
    content: {
        minWidth: '300px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default CustomModal;