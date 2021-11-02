import React from 'react'
import s from './Profile.module.css'
import { NavLink } from 'react-router-dom';


const Profile = (props) => {
    return (
        <div className={s.profileWrapper}>
            {
                props.isAuth
                    ?
                    <>
                        <div className={s.user}>
                            <div >
                                {
                                    props.userAvatar === "null" || props.userAvatar === null ? 
                                    <div className={s.circle}></div>
                                    :
                                    <img className={s.circle} src={props.userAvatar} alt="" />
                                }
                            </div>
                            <div className={s.authStatus}>Welcome, {props.username}
                            <NavLink to='/editProfile'><span className={s.editProfile}>&#9881;&#65039;</span></NavLink>
                            </div>
                            <button className={s.logoutButton} onClick={e => { props.handleLogout(e) }}>Logout</button>
                        </div>
                        
                        <div className={s.authBlock}>
                            <span className={s.suggestEnterChat}>Enter the Groupchat</span>
                            <NavLink to='/chat'><button className={s.enterChatButton}>Go</button></NavLink>
                        </div>
                    </>
                    :
                    <>
                        <div className={s.user}>
                            <div className={s.circle}></div>
                            <div className={s.authStatus}>You're not authorized</div>
                        </div>

                        <div className={s.authBlock}>
                            <span>Start chatting with signup or login</span>
                            <div className={s.signup}>
                                <NavLink to='/signup'><button className={s.authButton}>Sign up new account</button></NavLink>
                            </div>
                            <div className={s.signin}>
                                <NavLink to='/login'><button className={s.authButton}>Sign in to your account</button></NavLink>
                            </div>
                        </div>
                    </>
            }
        </div >

    )
}

export default Profile
