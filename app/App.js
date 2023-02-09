import { PokemonController } from "./Controllers/PokemonController.js";
import { SandboxController } from "./Controllers/SandboxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokemonController = new PokemonController()
  sandboxController = new SandboxController()
}

window["app"] = new App();
