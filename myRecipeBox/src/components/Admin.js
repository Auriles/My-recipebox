import React from 'react';
import AjouterRecette from './AjouterRecette';

class Admin extends React.Component {
  render() {
    return(
      <div className="cards">
        <AjouterRecette ajouterRecette={this.props.ajouterRecette} />
        <footer>
          <button onClick={this.props.chargerExemple}>Remplir</button>
        </footer>
      </div>
    )
  }

  static propTypes = {
    chargerExemple: React.PropTypes.func.isRequired,
    ajouterRecette: React.PropTypes.func.isRequired
  }

}

export default Admin;

