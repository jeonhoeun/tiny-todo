import React from 'react';
import { StyleSheet, StatusBar, Text, View, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from './ToDo';
const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
	state = {
		newToDo: '',
	};

	_controlNewToDo = text => {
		this.setState({
			newToDo: text,
		});
	};

	render() {
		const { newToDo } = this.state;
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Text style={styles.title}>This is title</Text>
				<View style={styles.card}>
					<TextInput
						style={styles.input}
						placeholder="New Todo"
						value={newToDo}
						onChangeText={this._controlNewToDo}
						placeholderTextColor={'#999'}
						returnKeyType={'done'}
						autoCorrect={false}
					/>
					<ScrollView contentContainerStyle={styles.toDoContainer}>
						<ToDo text="props text" />
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#a0a0a0',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 30,
		marginTop: 100,
		marginBottom: 50,
		fontWeight: '200',
	},
	card: {
		flex: 1,
		backgroundColor: 'white',
		width: width - 25,
		marginBottom: 50,
		borderRadius: 10,

		...Platform.select({
			ios: {
				shadowColor: 'rgb(50,50,50)',
				shadowOpacity: 0.5,
				shadowRadius: 5,
				shadowOffset: {
					width: 0,
					height: -1,
				},
			},
			android: {
				elevation: 3,
			},
		}),
	},
	input: {
		padding: 10,
		borderBottomColor: '#bbb',
		borderBottomWidth: StyleSheet.hairlineWidth,
		fontSize: 25,
	},

	toDoContainer: {
		alignItems: 'center',
	},
});
