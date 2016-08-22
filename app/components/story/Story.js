import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class Story extends Component {

    static propTypes = {
        title: React.PropTypes.string,
        text: React.PropTypes.string.isRequired,
        handleDelete: React.PropTypes.func
    }

    render() {
        return (
            <Card key={this.props.id}>
                <CardHeader
                    title={this.props.title}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                <CardText expandable={true}>
                    {this.props.text}
                </CardText>
                <CardActions>
                    <FlatButton onClick={this.props.handleDelete.bind(this)}>Delete</FlatButton>
                </CardActions>
            </Card>
        )
    }
}