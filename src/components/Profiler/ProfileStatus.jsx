import React from 'react';

class ProfileStatus extends React.Component {

    statusInputRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        }
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ?
                        <span onClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                        :
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            onChange={this.onStatusChange}
                            value={this.state.status}
                        />
                }
            </div>
        )
    }
}

export default ProfileStatus;