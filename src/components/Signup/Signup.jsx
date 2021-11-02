import React from 'react'
import s from './Signup.module.css'
import { useForm } from "react-hook-form";

const Signup = (props) => {
   const updateEmailText = (e) => {
        props.updateEmailText(e.target.value)
        if(props.authError) {
            props.clearAuthError()
        }
    }

   const updatePasswordText = (e) => {
        props.updatePasswordText(e.target.value)
        if(props.authError) {
            props.clearAuthError()
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className={s.signupWrapper} >
            <form onSubmit={handleSubmit(() => props.handleSignup(props.email, props.password))}>
                <div className={s.signupFields}>
                    <div className={s.item}>
                        <label htmlFor='email'>Enter email:</label>
                            <input {...register("email", {required: "Fill this input, please", pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Email should have this format: example@mail.com"
                                    }})} value={props.email} onChange={(e) => updateEmailText(e)}  className={s.inputItem} id='email'></input>
                                    <p className={s.inputError}>{errors.email && errors.email.message}</p>
                    </div>
                    <div className={s.item}>
                        <label htmlFor='password'>Enter password:</label>
                        <input {...register('password', {
                                    required: "Fill this input, please",
                                    minLength: {value: 6, message: "Password min length should be 6 "}
                                })} value={props.password} onChange={(e) => updatePasswordText(e)}  type='password' className={s.inputItem} id='password'></input>
                                <p className={s.inputError}>{errors.password && errors.password.message}</p>
                    </div>
                    <p className={s.inputError}>{props.authError && props.authError}</p>
                </div>
                    <div className={s.signupButtons}>
                        <button type="submit">Create account</button>
                    </div>
                </form>
            </div>
        )
    
}

export default Signup
