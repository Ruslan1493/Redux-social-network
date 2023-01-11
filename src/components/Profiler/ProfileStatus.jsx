import React from 'react';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    activateEditMode(e) {
        e.stopPropagation()
        this.setState({ editMode: true });
    }

    deactivateEditMode(e) {
        e.stopPropagation()

        this.setState({ editMode: false });
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ?
                        <span onClick={this.activateEditMode.bind(this)}>Hello</span>
                        :
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value='Hello' />
                }
            </div>
        )
    }
}

export default ProfileStatus;