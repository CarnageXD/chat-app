import React from 'react'
import s from './Profile.module.css'
import circleAvatar from './../../assets/img/slidan.jpg'
import { NavLink } from 'react-router-dom';
import fire from './../../firebase/Fire'


const Profile = (props) => {
    const handleLogout = (e) => {
        e.preventDefault()
        fire.auth().signOut()
    }
    // if (!props.isAuth) return <Redirect to='/login' />    
    return (
        <div className={s.profileWrapper}>
            {
                props.isAuth
                    ?
                    <>
                        <div className={s.user}>
                            <div >
                                <NavLink to='/editProfile'><img className={s.circle} src={props.userAvatar} alt="" /></NavLink>
                            </div>
                            <div className={s.authStatus}>Welcome, {props.username}</div>
                            <button className={s.logoutButton} onClick={e => { handleLogout(e) }}>Logout</button>
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
