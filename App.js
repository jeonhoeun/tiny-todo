import React from 'react';
import { StyleSheet, StatusBar, Text, View, TextInput, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Text style={styles.title}>This is title</Text>
				<View style={styles.card}>
					<TextInput placeholder="New Todo" />
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
		padding: 10,

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
});
