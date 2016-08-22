import React, {Component, PropTypes} from 'react';
import ContactListContainer from './ContactListContainer'
import ContactComposerContainer from './ContactComposerContainer'
import StoryComposerContainer from './StoryComposerContainer'
import StoryListContainer from './StoryListContainer'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import reactCSS from 'reactcss'


export default class App extends Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object.isRequired
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme(baseTheme)
        }
    }

    render() {
        const styles = reactCSS({
            default: {
                wrapper: {
                    display: "flex",
                    "flexDirection": "row",
                    height: "100%",
                    width: "100%"
                }
            }
        })
        return (
            <div style={styles.wrapper}>
                <ContactListContainer/>
                <StoryListContainer/>
                <StoryComposerContainer/>
                <ContactComposerContainer/>
            </div>
        );
    }
}
