import { IoMdCloseCircle } from "react-icons/io";
import style from './style.module.css'

const Modal = ({ setShowModal, children }) => {

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className={style.modal}>

            <div className={style.modal__content}>
                <IoMdCloseCircle onClick={closeModal} className={style.modal__close} />
                <section>
                    {children}
                </section>
            </div>
        </div>
    )
}

export default Modal