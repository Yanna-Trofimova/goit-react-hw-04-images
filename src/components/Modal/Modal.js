import {  useEffect } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Modal/Modal.module.css'

function Modal({closeModal,bigImg}) {

  useEffect(() => {
   const handelKeyDown = e => {
    if (e.code === 'Escape') {
     closeModal();
    }
  };
    window.addEventListener('keydown', handelKeyDown);
    return () => {
      window.removeEventListener('keydown', handelKeyDown);
    };
  }, [closeModal]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

 
    return (
      <div onClick={handleBackDropClick}
        className={css.Overlay}
        >
            <div className={css.Modal}
            >
          <img src={bigImg} alt="bigPic" />
        </div>
      </div>
    );
  }


Modal.propTypes = {
  bigImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal