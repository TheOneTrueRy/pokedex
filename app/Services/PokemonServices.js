import { appState } from "../AppState.js"
import { pokeAPI } from "./AxiosService.js"


class PokemonServices{
  async getPokemon() {
    const res = await pokeAPI.get('?limit=100000&offset=0')
    console.log(res.data)
    appState.Pokemon = res.data.results
  }
  
}

export const pokemonServices = new PokemonServices()