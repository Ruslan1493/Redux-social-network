import React from 'react';
import { connect } from 'react-redux';
import withRouter from '../common/withRouter';

import { setUserProfile } from '../Redux/profileReducer';
import Profile from "../Profiler/Profile";
import axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let { userId } = this.props.router.params;
        if(!userId){
            userId = 1;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                console.error('profile page: ', this.props.router)
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

const WithRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithRouterContainerComponent);