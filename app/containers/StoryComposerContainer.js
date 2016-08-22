import React, { Component } from 'react'
import { connect } from 'react-redux'
import StoryComposer from '../components/composers/StoryComposer'
import { bindActionCreators } from 'redux'
import { toggleStoryComposer as toggleComposer } from '../actions/UIActions'
import { addStory } from '../actions/StoryActions'

const mapStateToProps = state => {
    return {
        isShowingComposer: state.ui.get("storyComposerShown"),
        selectedContactId: state.main.get("selectedContactId")
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({addStory, toggleComposer}, dispatch)
    }
}

const StoryComposerContainer = connect(mapStateToProps, mapDispatchToProps)(StoryComposer)
export default StoryComposerContainer