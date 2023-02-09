import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonServices } from "../Services/PokemonServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawLanding(){
  setHTML('activePokemon', Pokemon.BlankTemplate())
}

function _drawPokemon(){
  let template = ''
  appState.Pokemon.forEach(p => template += Pokemon.pokemonListTemplate(p))
  setHTML('pokemonList', template)
}

function _drawActivePokemon(){
  if(appState.activePokemon){
    setHTML('activePokemon', appState.activePokemon.activePokemonTemplate)
  }else{
    _drawLanding()
  }
}

export class PokemonController{
  constructor(){
    this.getPokemon()
    appState.on('Pokemon', _drawPokemon)
    appState.on('activePokemon', _drawActivePokemon)
  }

  async getPokemon(){
    try {
      await pokemonServices.getPokemon()
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  async getPokemonByName(name){
    try {
      await pokemonServices.getPokemonByName(name)
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }
}