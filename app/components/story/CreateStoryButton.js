import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import reactCSS from 'reactcss'

export default class CreateStoryButton extends Component {

    static propTypes = {
        handleClick: React.PropTypes.func
    }

    render() {
        const styles = reactCSS({
            default: {
                main: {
                    right: "1em",
                    bottom: "2em",
                    position: "absolute",
                    width: "auto"
                }
            }
        })
        return (
            <FloatingActionButton style={styles.main} onClick={this.props.handleClick}>
                <ContentAdd />
            </FloatingActionButton>
        )
    }
}