import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import { IconContext } from 'react-icons';
import {AiFillCloseCircle} from 'react-icons/ai';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

/**
 * 
 * @param {function} onClose to reset isShow and close modal by clicking on close button
 * @param {React.ReactNode} children content to display in modal
 * @param {boolean} isShow
 * @param {function} setIsShow to change isShow value
 * @param {number} timeOut number in miliseconds to close modal automaticly
 * 
 */
export default function Modal({onClose, children, isShow, setIsShow, timeOut}) {

    useEffect(() => {
        if (isShow && timeOut) {
          const timeoutId = setTimeout(() => {
            setIsShow(false); // Close Modal after 3sec
          }, timeOut);
          
          // Clear time out before component render
          return () => clearTimeout(timeoutId);
        }
      }, [isShow, setIsShow, timeOut]);


    return createPortal(
    <IconContext.Provider value={{className:`${styles.closebtn}`}}>
        <div className={`${isShow ? `${styles.modal} ${styles.active}` : styles.modal}`}>
            <button className={styles.close} onClick={onClose}>
                    <AiFillCloseCircle />
            </button>
            <div className={styles.content}>{children}</div>
        </div>
    </IconContext.Provider>, document.body
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node]).isRequired,
    isShow: PropTypes.bool.isRequired,
    setIsShow: PropTypes.func.isRequired, 
    timeOut: PropTypes.number
}