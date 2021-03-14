import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from './../../redux/auth-reducer'
import Profile from './Profile'
import fire from '../../firebase/Fire'
import Preloader from '../common/Preloader'


class ProfileContainer extends React.Component {
    componentDidMount() {
        const db = fire.firestore()
        db.collection('userProfile').get()
            .then(snapshot => {
                const data = snapshot.docs
                data.forEach((doc) => {
                    if (this.props.currentUser === doc.data().userId) {
                        this.props.setUserProfile(doc.data().username, doc.data().userAvatar)
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <Profile isAuth={this.props.isAuth} username={this.props.username} userAvatar={this.props.userAvatar} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        username: state.auth.username,
        userAvatar: state.auth.userAvatar,
        currentUser: state.auth.currentUser,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
