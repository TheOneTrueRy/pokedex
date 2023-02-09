import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeAPI } from "./AxiosService.js"


class PokemonServices{
  async getPokemon() {
    const res = await pokeAPI.get('?limit=100000&offset=0')
    console.log(res.data)
    appState.Pokemon = res.data.results
  }

  async getPokemonByName(name){
    const res = await pokeAPI.get(name)
    console.log('get by index', res.data);
    appState.activePokemon = new Pokemon(res.data)
    console.log('pokemon by name in appstate', appState.activePokemon);
  }
  
}

export const pokemonServices = new PokemonServices()