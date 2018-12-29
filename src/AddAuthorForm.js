import React, { Component } from 'react';

class AddAuthorForm extends Component {
    render() {
        return (
            <div>
                <h1>Add Author</h1>
                <p>{JSON.stringify(this.props.match)}</p>
            </div>
        );
    }
}

export default AddAuthorForm;