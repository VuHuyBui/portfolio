import '../style/base.scss';
import '../style/Contact.scss'
import {forwardRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact (props, ref) {
    return (
        <div className="contact" ref={ref}>
            <h1 className="contact-title">Contact</h1>
            <span className="contact-email">
                <span className="contact-email-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                vubh2015@gmail.com
            </span>
            <span className="contact-phone">
                <span className="contact-phone-icon">
                    <FontAwesomeIcon icon={faPhone} />
                </span>
                (VN) +84 798353889
            </span>
            
        </div>
    )
}

export default forwardRef(Contact)