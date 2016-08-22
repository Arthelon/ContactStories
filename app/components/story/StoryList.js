import React, { Component } from 'react'
import CreateStoryButton from './CreateStoryButton'
import Story from './Story'
import reactCSS from 'reactcss'

export default class StoryList extends Component {

    componentWillReceiveProps(props) {
        this.contents = null;
        if (props.selectedContactId.length) {
            if (props.stories.length > 0) {
                this.contents = Object.keys(props.stories).map(storyKey => {
                    let story = props.stories[storyKey]
                    return (
                        <Story
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            text={story.text}
                            handleDelete={() => {
                                props.removeStory(props.selectedContactId, story.id)
                            }}
                        />
                    )
                })
            } else {
                this.contents = <h1 style={this.styles.title}>No stories found!</h1>
            }
        }
    }

    render() {
        this.styles = reactCSS({
            default: {
                main: {
                    padding: "1em 2em 1em 2em",
                    width: "100%",
                    height: "100%"
                },
                title: {
                    textAlign: "center",
                    fontSize: "24px",
                    fontStyle: "normal"
                }
            }
        })
        return (
            <div style={this.styles.main}>
                { this.contents }
                <CreateStoryButton
                    handleClick={() => {
                        this.props.toggleStoryComposer()
                    }}
                    />
            </div>
        )
    }
}