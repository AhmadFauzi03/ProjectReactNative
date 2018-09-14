import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return (
			<Text style={salon.judul}>
			{this.props.judul}</Text>
			)
	}
} 
const salon = {
	judul: {
		color: 'red',
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: 'black'
	}
}
export default Judul;
