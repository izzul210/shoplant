import React from 'react';
import './FeaturedPlants.scss';
import plantRare from '../../../asset/images/plant_rare.png';
import plantIndoor from '../../../asset/images/plant_indoor.png';
import plantPokemon from '../../../asset/images/bulbasaur.png';

function FeaturedPlants() {
    return (
        <div className="featuredPlants">
            <div className="rarePlant">
                <div className="image">
                    <img src={plantRare} alt=""></img>
                </div>
                <div className="context">
                    <p>Rare Plants</p>
                    <h3>Plants for Inspirations</h3>
                </div>
            </div>
            <div className="indoorPlant">
                <div className="context">
                    <p>Indoor Plants</p>
                    <h3>Plants for Indoor</h3>
                </div>
                <div className="image">
                    <img src={plantIndoor} alt=""></img>
                </div>
            </div>
            <div className="pokemonPlant">
                <div className="image">
                    <img src={plantPokemon} alt=""></img>
                </div>
                <div className="context">
                    <p>PokePlants</p>
                    <h3>Who's that Pokémon?</h3>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPlants
