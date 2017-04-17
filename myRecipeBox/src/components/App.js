// React
import React from 'react';
import Header from './Header';
import Admin from './Admin';
import Card from './Card';
// Charger les recettes
import recettes from '../recettes';
// Firebase
import base from '../base';

class App extends React.Component {

	state = {
		recettes: {}
	};

	componentWillMount() {
		this.ref = base.syncState(`${this.props.params.pseudo}/recettes`, {
			context: this,
			state: 'recettes'
		})
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	chargerExemple = () => {
		this.setState({recettes});
	};

	render() {

		const cards = Object
			.keys(this.state.recettes)
			.map(key => <Card key={key} details={this.state.recettes[key]} />);

		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					{cards}
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
