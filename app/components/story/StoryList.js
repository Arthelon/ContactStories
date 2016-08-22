import React, { Component } from 'react'
import CreateStoryButton from './CreateStoryButton'
import Story from './Story'

export default class StoryList extends Component {

    render() {
        return (
            <div>
                { Object.keys(this.props.stories).length ? Object.keys(this.props.stories).map(storyKey => {
                    let story = this.props.stories[storyKey]
                    return (
                        <Story
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            text={story.text}
                            handleDelete={() => {
                                this.props.removeStory(this.props.selectedContactId, story.id)
                            }}
                            />
                    )
                }) :
                    <h1>No stories found!</h1>
                }
                <CreateStoryButton
                    handleClick={() => {
                        this.props.toggleStoryComposer()
                    }}
                    />
            </div>
        )
    }
}