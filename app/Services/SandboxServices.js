import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeAPI, sandboxAPI } from "./AxiosService.js";


class SandboxServices{
  async getMyPokemon() {
  const res = await sandboxAPI.get('ry/pokemon')
  appState.myPokemon = res.data.map(p => new Pokemon(p))
  }
  async catchPokemon() {
  const res = await sandboxAPI.post('ry/pokemon', appState.activePokemon)
  let caughtPokemon = new Pokemon(res.data)
  appState.myPokemon.push(caughtPokemon)
  appState.emit('myPokemon')
  appState.activePokemon = caughtPokemon
  }

}

export const sandboxServices = new SandboxServices()