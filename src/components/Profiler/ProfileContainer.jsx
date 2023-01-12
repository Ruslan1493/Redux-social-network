import React from 'react';
import { connect } from 'react-redux';
import withRouter from '../common/withRouter';

import { getProfile, getStatus, updateStatus } from '../Redux/profileReducer';
import Profile from "../Profiler/Profile";
import withAuthRedirect from '../common/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let { userId } = this.props.router.params;
        if (!userId) {
            userId = 3;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);