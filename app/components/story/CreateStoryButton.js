import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

export default class CreateStoryButton extends Component {

    static propTypes = {
        handleClick: React.PropTypes.func
    }

    render() {
        return (
            <FloatingActionButton onClick={this.props.handleClick}>
                <ContentAdd />
            </FloatingActionButton>
        )
    }
}