import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonServices } from "../Services/PokemonServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemon(){
  let template = ''
  appState.Pokemon.forEach(p => template += Pokemon.pokemonListTemplate(p))
  setHTML('pokemonList', template)
}

export class PokemonController{
  constructor(){
    this.getPokemon()
    appState.on('Pokemon', _drawPokemon)
  }

  async getPokemon(){
    try {
      await pokemonServices.getPokemon()
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }
}