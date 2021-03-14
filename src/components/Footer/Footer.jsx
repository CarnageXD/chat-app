import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.feedback}>
                <div className={s.feedbackSuggest}>Send us an email:</div>
                <div className={s.feedbackEmail}>appsupport@boltcard.io</div>
            </div>
        </div>
    )
}

export default Footer
