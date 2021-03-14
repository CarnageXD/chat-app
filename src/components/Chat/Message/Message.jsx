import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={`${s.messageWrapper} ${props.userId === props.currentUser ? s.mine : ``}`}>
            <div className={`${s.messageSendInfo} ${props.userId === props.currentUser ? s.mine : ``}`}>
                <div className={`${s.messageText} ${props.userId === props.currentUser ? s.mine : ``}`}>{props.text}</div>
                <div className={s.messageSenderAvatarBlock}>
                    <img className={s.messageSenderAvatar} src={props.userAvatar}></img>
                </div>
            </div>
            <div className={s.senderMetadata}>{props.username} - 9:38AM</div>
        </div >
    )
}

export default Message
