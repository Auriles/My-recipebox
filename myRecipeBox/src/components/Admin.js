import React from 'react';
import AjouterRecette from './AjouterRecette';

class Admin extends React.Component {

  traiterChangement = (event, key) => {
    const recette = this.props.recettes[key];
    const majRecette = {
      ...recette,
      [event.target.name] : event.target.value
    };
    this.props.majRecette(key, majRecette);
  };

  renderAdmin = key => {
    const recette = this.props.recettes[key];
    return(
      <div className="card" key={key} >
        <form className="admin-form">

          <input type="text" name="nom" placeholder="Nom de la recette" onChange={e => this.traiterChangement(e, key)} value={recette.nom}/>

          <input type="text" name="image" placeholder="Adresse de l'image" onChange={e => this.traiterChangement(e, key)} value={recette.image}/>

          <textarea name="ingredients" rows="3" placeholder="Liste des ingrédients" onChange={e => this.traiterChangement(e, key)} value={recette.ingredients}/>

          <textarea name="instructions" rows="3" placeholder="Liste des instructions" onChange={e => this.traiterChangement(e, key)} value={recette.instructions}/>

        </form>

        <button onClick={() => this.props.supprimerRecette}>Supprimer</button>

      </div>
    )
  }

  render() {

    const adminCards = Object
      .keys(this.props.recettes)
      .map(this.renderAdmin);

    return(
      <div className="cards">
        <AjouterRecette ajouterRecette={this.props.ajouterRecette} />
        {adminCards}
        <footer>
          <button onClick={this.props.chargerExemple}>Remplir</button>
        </footer>
      </div>
    )
  }

  static propTypes = {
    recettes: React.PropTypes.object.isRequired,
    chargerExemple: React.PropTypes.func.isRequired,
    ajouterRecette: React.PropTypes.func.isRequired,
    majRecette: React.PropTypes.func.isRequired,
    supprimerRecette: React.PropTypes.func.isRequired
  }

}

export default Admin;

