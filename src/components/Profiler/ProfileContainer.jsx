import React from 'react';
import { connect } from 'react-redux';
import withRouter from '../common/withRouter';

import { getProfile } from '../Redux/profileReducer';
import Profile from "../Profiler/Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let { userId } = this.props.router.params;
        if (!userId) {
            userId = 3;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
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

export default connect(mapStateToProps, { getProfile })(WithRouterContainerComponent);