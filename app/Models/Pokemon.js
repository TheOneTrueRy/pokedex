

export class Pokemon{
  constructor(data){
    debugger
    this.id = data.id
    this.name = data.name
    this.img = data.img || data.sprites.other['official-artwork'].front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.user = 'what do I put here lol'
  }



  get activePokemonTemplate(){
    return `
    <div class="row px-5 hundo">
      <div class="col-11 offset-1 d-flex justify-content-center mt-4 rounded elevation-1 pokeCardOuter">
        <div class="py-1 pokeCardInner d-flex justify-content-center align-items-center">
          <span id="pokeName" class="fs-3 fw-bold">${this.name}</span>
        </div>
      </div>
      <div id="sprite" class="col-11 offset-1 d-flex justify-content-center align-items-center py-4">
        <img class="img-fluid" src="${this.img}" alt="">
      </div>
      <div class="col-11 offset-1 pokeCardOuter d-flex justify-content-center">
        <div class="px-3 pokeCardInner">
          <div class="row">
            <div class="col-6 d-flex flex-column">
              <span class="mt-3 fs-5">Height: ${this.height}</span>
              <span id="types" class="mt-3 fs-5">Types: ${this.types[0].type.name} ${this.types[1] ? this.types[1].type.name : ''}</span>
            </div>
            <div class="col-6 d-flex flex-column">
              <span class="mt-3 fs-5">Weight: ${this.weight}</span>
              <button onclick="app.sandboxController.catchPokemon()" class="mt-5 myPokeBtn rounded mb-2 py-2 fs-5"><i class="mdi mdi-pokeball fs-5 me-3"></i>Catch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  static pokemonListTemplate(pokemon){
    return `
    <span class="fs-3 py-1 px-1 selectable" onclick="app.pokemonController.getPokemonByName('${pokemon.name}')"><i class="mdi mdi-pokeball fs-3 fw-bold me-3"></i>${pokemon.name}</span>
    `
  }

  static BlankTemplate(){
    return `
    <div class="row px-5 hundo">
      <div class="col-11 offset-1 d-flex justify-content-center mt-4 rounded elevation-1 pokeCardOuter">
        <div class="text-center py-1 pokeCardInner">
          <span id="pokeName" class="fs-3 fw-bold">Select a Pokemon!</span>
        </div>
      </div>
      <div id="sprite" class="col-11 offset-1 d-flex justify-content-center align-items-center py-4">
        <img class="img-fluid" src="" alt="">
      </div>
      <div id="infoCard" class="col-11 offset-1 pokeCardOuter d-flex justify-content-center">
        <div class="px-3 pokeCardInner">
          <div class="row">
            <div class="col-6 d-flex flex-column">
              <span class="mt-4">Height: </span>
              <span class="mt-5">Types:</span>
            </div>
            <div class="col-6 d-flex flex-column">
              <span class="mt-4">Weight: </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}