import React from 'react'
import Preloader from '../common/Preloader'
import s from './Chat.module.css'
import Message from './Message/Message'

const Chat = (props) => {
    const messagesDiv = React.createRef()
    const scrollDown = () => {
        messagesDiv.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    const updateMessageText = (e) => {
        props.updateMessageText(e.target.value)
    }
    return (
        <div className={s.chatWrapper}>
            <div className={s.messageDate}>Today</div>
            <div className={s.messagesWrapper}>
                {
                    props.isLoading ?
                        <Preloader /> :
                        props.messages.map(message => <Message {...message} currentUser={props.currentUser} />)
                }
            </div>
            <div className={s.messageInputBlock}>
                <textarea onChange={e => updateMessageText(e)} placeholder='Send message' className={s.messageInputField} type='text' value={props.text}></textarea>
                <button onClick={scrollDown} onClick={props.sendMessage} className={s.messageInputButton}>&#9655;</button>
            </div>

        </div>
    )
}

export default Chat
