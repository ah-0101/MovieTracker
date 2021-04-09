import React, { useState } from 'react';
import { Modal } from '../context/Modal';

const MovieInfoModal = ({movieId}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button onClick={() => setShowModal(true)} className='login-button'>info</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
        
            </Modal>
          )}
        </>
      );
}


export default MovieInfoModal;