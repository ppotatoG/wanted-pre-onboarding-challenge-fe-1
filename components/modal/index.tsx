import React, {useState} from "react";
import Modal from 'react-modal';

import styles from '@styles/Home.module.scss'

const CustomModal = ({text, modalIsOpen, setIsOpen} : any) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <p>{text}</p>
                <div className={styles.btn_wrap}>
                    <button className={styles.btn_wrap__item} onClick={() => setIsOpen(false)}>확인 </button>
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