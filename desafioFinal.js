let heroi = "Belmont";
let idade = 35;
let tipo = "Guerreiro";

class Heroi{
  constructor(heroi, idade){
    this.heroi = heroi;
    this.idade = idade;

    console.log(`O ${this.heroi} tem ${idade}`);
  }
}

class Ataque{
  constructor(tipo){
    switch (){
      case "guerreiro":
      console.log();
      break;
        case "mago":

      break;
        case "monje":

      break;
      case "ninja":

      break;
    }
  }
}

let heroiInformacoes = new Heroi(heroi, idade)
let heroiGolpe = new Ataque(tipo);

console.log(`O ${heroiInformacoes} atacou com ${heroiGolpe}`);
