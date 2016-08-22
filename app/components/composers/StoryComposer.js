import React, { Component } from 'react'
import reactCSS from 'reactcss'
import IconButton from 'material-ui/IconButton'
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export default class StoryComposer extends Component {

    state = {
        content: {
            error: '',
            value: ''
        },
        title: {
            error: '',
            content: ''
        }
    }

    render() {
        const styles = reactCSS({
            default: {
                main: {
                    translate: "transformY(100%)",
                    top: '0',
                    bottom: '0',
                    left: '0',
                    zIndex: '-1',
                    width: '100%',
                    height: '100%',
                    transition: 'all 200ms ease-in-out',
                    opacity: '0',
                    position: "fixed",
                    background: "white",
                    display: "inline-block",
                    padding: "1em 2em",
                    textAlign: "center"
                },
                exitButton: {
                    float: "left"
                },
                item: {
                    margin: "0 auto"
                }
            },
            isShowingComposer: {
                main: {
                    opacity: 1,
                    zIndex: 10
                }
            }
        }, this.props)
        return (
            <div style={styles.main}>
                <IconButton
                    style={styles.exitButton}
                    tooltip="Exit"
                    onClick={this.handleExit}>
                    <ExitToApp/>
                </IconButton>
                <TextField
                    style={styles.item}
                    floatingLabelText="Title"
                    onChange={this.handleTitleChange}
                    errorText={this.state.title.error}
                />
                <br/>
                <TextField
                    style={styles.item}
                    floatingLabelText="Content"
                    onChange={this.handleContentChange}
                    errorText={this.state.content.error}
                />
                <br/>
                <FlatButton
                    label="Submit"
                    style={styles.item}
                    disabled={!!this.state.content.error || !!this.state.title.error}
                    onClick={this.handleSubmit}
                />
            </div>
        )
    }

    handleTitleChange = (e) => {
        let value = e.target.value
        let error = !value ? "Title must be entered" : ''
        this.setState({
            title: {
                value,
                error
            }
        })
    }

    handleContentChange = (e) => {
        let value = e.target.value
        let error = !value ? "Content must be entered" : ''
        this.setState({
            content: {
                value,
                error
            }
        })
    }

    handleSubmit = () => {
        if (!this.state.title.value) {
            this.setState({
                title: {
                    error: "Title must be entered"
                }
            })
        } else if (!this.state.content.value) {
            this.setState({
                content: {
                    error: "Content must be entered"
                }
            })
        } else {
            this.props.addStory(this.props.selectedContactId, this.state.title.value, this.state.content.value)
            this.handleExit()
        }
    }

    handleExit = () => {
        this.props.toggleComposer()
    }
}