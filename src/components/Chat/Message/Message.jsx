import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
    if (props.createdAt === null) return ''
    return (
        <div className={`${s.messageWrapper} ${props.userId === props.currentUser ? s.mine : ``}`}>
            <div className={`${s.messageSendInfo} ${props.userId === props.currentUser ? s.mine : ``}`}>
                <div className={`${s.messageText} ${props.userId === props.currentUser ? s.mine : ``}`}>{props.text}</div>
                <div className={s.messageSenderAvatarBlock}>
                    {
                        props.userAvatar === "null" || props.userAvatar === null ?
                        <div className={s.messageSenderAvatar}></div>
                        :
                        <img className={s.messageSenderAvatar} src={props.userAvatar} alt=""/>
                    }
                </div>
            </div>
            <div className={s.senderMetadata}>{props.username} - {props.createdAt.toDate().toString().slice(16, 25)}</div>
        </div >
    )
}

export default Message
