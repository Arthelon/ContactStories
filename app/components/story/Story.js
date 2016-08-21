import React, { Component } from 'react'

export default class Story extends Component {

    static propTypes = {
        text: React.PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}