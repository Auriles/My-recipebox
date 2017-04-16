// React
import React from 'react';
import Header from './Header';
import Admin from './Admin';
// Charger les recettes
import recettes from '../recettes';

class App extends React.Component {

	state = {
		recettes: {}
	};

	chargerExemple = () => {
		this.setState({recettes});
	};

	render() {
		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					<div className="card"></div>
				</div>
				<Admin chargerExemple={this.chargerExemple} />
			</div>
		)
	}

	static propTypes = {
	  params: React.PropTypes.object.isRequired
	};
}

export default App;
