import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import { IconContext } from 'react-icons';
import {AiFillCloseCircle} from 'react-icons/ai';
import { createPortal } from 'react-dom';

export default function Modal({onClose, children, isShow}) {

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
    isShow: PropTypes.bool.isRequired
}