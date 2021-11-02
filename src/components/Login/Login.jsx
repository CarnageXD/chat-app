import React from 'react'
import s from './Login.module.css'
import { useForm } from "react-hook-form";


const Login = (props) => {
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
            <div className={s.loginWrapper} >
                <form onSubmit={handleSubmit(() =>  props.handleSignin(props.email, props.password))}>
                    <div className={s.loginFields}>
                        <div className={s.item}>
                            <label htmlFor='email'>Enter email:</label>
                            <input {...register("email", {required: "Fill this input, please"})} value={props.email} onChange={(e) => updateEmailText(e)}  type='email' className={s.inputItem} id='email'></input>
                            <p className={s.inputError}>{errors.email && errors.email.message}</p>
                        </div>
                        <div className={s.item}>
                            <label htmlFor='password'>Enter password:</label>
                            <input {...register("password",
                            {
                                required: "Fill this input, please",
                                minLength: {value: 6, message: "Password length is too short"}
                            })} value={props.password} onChange={(e) => updatePasswordText(e)}  type='password' className={s.inputItem} id='password'></input>
                            <p className={s.inputError}>{errors.password && errors.password.message}</p>
                            </div>
                    </div>
                    <p className={s.inputError}>{props.authError && props.authError}</p>
                    <div className={s.loginButtons}>
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        )
    }


export default Login
