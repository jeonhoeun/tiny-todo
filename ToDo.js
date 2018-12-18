import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ToDo extends React.Component {
	state = {
		isCompleted: false,
		isEditing: false,
		toDoValue: '',
	};
	render() {
		const { text } = this.props;
		const completed = this.state.isCompleted;
		const editing = this.state.isEditing;
		const toDoValue = this.state.toDoValue;
		return (
			<View>
				{editing ? (
					<View>
						<View style={styles.container}>
							<View style={styles.iconContainer}>
								<TextInput
									value={toDoValue}
									backgroundColor="red"
									multiline={true}
									onChangeText={this._controllInput}
								/>
								<TouchableOpacity onPress={this._finishEditing}>
									<Text style={styles.editorIcon}>✅</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				) : (
					<View>
						<View style={styles.container}>
							<TouchableOpacity onPressOut={this._toggleComplete}>
								<View style={[styles.circle, completed ? styles.completed : styles.uncompleted]} />
							</TouchableOpacity>
							<Text style={[styles.text, completed ? styles.completedText : styles.uncompletedText]}>
								{text}
							</Text>

							<View style={styles.iconContainer}>
								<TouchableOpacity onPress={this._startEditing}>
									<Text style={styles.editorIcon}>✏️</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={styles.deleteIcon}>❌</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			</View>
		);
	}

	_toggleComplete = () => {
		console.log('on toggle');
		this.setState(prev => {
			return {
				isCompleted: !prev.isCompleted,
			};
		});
	};

	_startEditing = () => {
		const { text } = this.props;
		this.setState({
			toDoValue: text,
			isEditing: true,
		});
	};

	_finishEditing = () => {
		this.setState({
			isEditing: false,
		});
	};

	_controllInput = text => {
		this.setState({
			toDoValue: text,
		});
	};
}

const styles = StyleSheet.create({
	container: {
		width: width - 50,
		height: 50,
		flexDirection: 'row',
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	circle: {
		width: 25,
		height: 25,
		borderRadius: 25,
		borderColor: 'red',
		borderWidth: 2,
		marginRight: 10,
	},
	completed: {
		borderColor: 'black',
	},
	uncompleted: {
		borderColor: 'blue',
	},

	text: {
		fontWeight: '300',
		fontSize: 20,
	},

	completedText: {
		color: '#bbb',
		textDecorationLine: 'line-through',
	},

	uncompletedText: {
		color: 'blue',
	},

	iconContainer: {
		width: width / 5,
		flexDirection: 'row',
	},

	editorIcon: {
		marginLeft: 20,
	},

	deleteIcon: {
		marginLeft: 20,
	},
});
