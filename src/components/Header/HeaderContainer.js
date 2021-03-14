import React from 'react'
import fire from '../../firebase/Fire'
import { authStatus, updateCurrentUser } from '../../redux/auth-reducer'
import Header from './Header'
import { connect } from 'react-redux'



class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     fire.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             console.log(user);
    //             this.props.authStatus(true)
    //             this.props.updateCurrentUser(user.uid)
    //         } else {
    //             // No user is signed in.
    //             this.props.authStatus(false)
    //         }
    //     });
    // }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    currentUser: state.auth.isAuth,
})

export default connect(mapStateToProps, { authStatus, updateCurrentUser })(HeaderContainer)
