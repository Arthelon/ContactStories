import React, {Component} from 'react'
import dynamics from 'dynamics.js'
import FileUpload from 'material-ui/svg-icons/file/file-upload'
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import reactCSS from 'reactcss'


export default class ContactComposer extends Component {
	state = {
		errors: {
			name: ''
		}
	}

	handleNameChange = (val) => {
		console.log(val)
	}

	handleSubmit = () => {

	}

	handleExit = () => {
		this.props.toggleComposer()
	}

	render() {
		const styles = reactCSS({
			default: {
				composer: {
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
				item: {
					margin: "0 auto"
				},
				exitButton: {
					float: "left"
				}
			},
			isShowingComposer: {
				composer: {
					translate: "transformY(0)",
					opacity: '1',
					zIndex: '10'
				}
			}
		}, this.props)
		return (
			<div style={styles.composer}>
				<IconButton 
					style={styles.exitButton}
					tooltip="Exit"
					onClick={this.handleExit}>
					<ExitToApp/>
				</IconButton>
				<TextField
					style={styles.item}
					floatingLabelText="Contact name"
					onChange={this.handleNameChange}
					errorText={this.state.errors.name}
				/>
				<br/>
				<FlatButton 
					style={styles.item}
					label="Image"
					icon={<FileUpload/>}>
				</FlatButton>
				<br/>
				<FlatButton 
					style={styles.item}
					primary={true} 
					label="Submit" 
					onClick={this.handleSubmit}
				/>
			</div>
		)
	}
}



