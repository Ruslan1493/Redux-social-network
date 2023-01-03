import React from 'react';
import { connect } from 'react-redux';

import style from "./Profile.module.scss";

import { setUserProfile } from '../Redux/profileReducer';
import Profile from "../Profiler/Profile";
import axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // console.error('profile page: ', setUserProfile)
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);