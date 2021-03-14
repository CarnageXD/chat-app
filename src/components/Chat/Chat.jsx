import React, { useEffect, useRef } from 'react'
import Preloader from '../common/Preloader'
import s from './Chat.module.css'
import Message from './Message/Message'

const Chat = (props) => {
    const updateMessageText = (e) => {
        props.updateMessageText(e.target.value)
    }

    const messageEl = useRef(null);
    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])

    return (
        <div className={s.chatWrapper}>
            <div className={s.messageDate}>Today</div>
            <div className={s.messagesWrapper} ref={messageEl}>
                {
                    props.isLoading ?
                        <Preloader /> :
                        props.messages.map(message => <Message {...message} currentUser={props.currentUser} />)
                }
            </div>
            <div className={s.messageInputBlock}>
                <textarea onChange={e => updateMessageText(e)} placeholder='Send message' className={s.messageInputField} type='text' value={props.text}></textarea>
                <button onClick={props.sendMessage} className={s.messageInputButton}>&#9655;</button>
            </div>

        </div>
    )
}

export default Chat
