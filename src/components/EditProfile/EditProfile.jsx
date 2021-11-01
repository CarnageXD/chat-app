import React from 'react'
import s from './EditProfile.module.css'

class EditProfile extends React.Component {
    updateUsernameText = (e) => {
        this.props.updateUsernameText(e.target.value)
    }

    onFileChangeHandler = (e) => {
        this.props.onFileChange(e.target.files[0])
    }

    render() {
        return (
            <div className={s.editProfileWrapper}>
                <form>
                    <div className={s.item}>
                        <label htmlFor='username'>Enter username:</label>
                        <input onChange={(e) => this.updateUsernameText(e)} type='text' required className={s.inputItem} id='username'></input>
                    </div>
                    <div className={s.item}>
                        <label htmlFor='userAvatar'>Upload avatar:</label>
                        <input onChange={this.onFileChangeHandler} type='file' required className={s.inputItem} id='userAvatar'></input>
                    </div>
                    <div className={s.suggestContinue}>
                        <button onClick={e => {
                            e.preventDefault()
                            this.props.setDataBaseProfileData()
                        }} className={s.continueButton}>Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditProfile
