import React from 'react'
import s from './Signup.module.css'

class Signup extends React.Component {
    updateEmailText = (e) => {
        this.props.updateEmailText(e.target.value)
    }

    updatePasswordText = (e) => {
        this.props.updatePasswordText(e.target.value)
    }

    render() {
        return (
            <div className={s.signupWrapper} >
                <form>
                    <div className={s.signupFields}>
                        <div className={s.item}>
                            <label htmlFor='email'>Enter email:</label>
                            <input value={this.props.email} onChange={(e) => this.updateEmailText(e)} required type='email' className={s.inputItem} id='email'></input>
                        </div>
                        <div className={s.item}>
                            <label htmlFor='password'>Enter password:</label>
                            <input value={this.props.password} onChange={(e) => this.updatePasswordText(e)} required type='password' className={s.inputItem} id='password'></input>
                        </div>

                    </div>
                    <div className={s.signupButtons}>
                        <button onClick={(e) => {
                            e.preventDefault()
                            this.props.handleSignup(this.props.email, this.props.password)
                        }}>Create account</button>
                        <span>or</span>
                        <button>Sign up with Google</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup
