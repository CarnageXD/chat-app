import React from 'react'
import s from './Login.module.css'

class Login extends React.Component {
    updateEmailText = (e) => {
        this.props.updateEmailText(e.target.value)
    }

    updatePasswordText = (e) => {
        this.props.updatePasswordText(e.target.value)
    }

    render() {
        return (
            <div className={s.loginWrapper} >
                <form>
                    <div className={s.loginFields}>
                        <div className={s.item}>
                            <label htmlFor='email'>Enter email:</label>
                            <input value={this.props.email} onChange={(e) => this.updateEmailText(e)} required type='email' className={s.inputItem} id='email'></input>
                        </div>
                        <div className={s.item}>
                            <label htmlFor='password'>Enter password:</label>
                            <input value={this.props.password} onChange={(e) => this.updatePasswordText(e)} required type='password' className={s.inputItem} id='password'></input>
                        </div>
                    </div>
                    <div className={s.loginButtons}>
                        <button onClick={(e) => {
                            e.preventDefault()
                            this.props.handleSignin(this.props.email, this.props.password)
                        }}>Log in</button>
                        <span>or</span>
                        <button>Log in with Google</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
