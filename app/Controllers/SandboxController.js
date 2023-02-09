import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxServices } from "../Services/SandboxServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawMyPokemon(){
  let template = ''
  appState.myPokemon.forEach(p => template += Pokemon.pokemonListTemplate(p))
  setHTML('myPokemonList', template)
}


export class SandboxController{
  constructor(){
    this.getMyPokemon()
    appState.on('myPokemon', _drawMyPokemon)
  }

  async getMyPokemon(){
    try {
      await sandboxServices.getMyPokemon()
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  async catchPokemon(){
    try {
      await sandboxServices.catchPokemon()
    } catch (error) {
      console.log(error);
      Pop.error(error)
    }
  }
}