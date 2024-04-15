const { generatePrime } = require("crypto");

class Animal{
  constructor(nome,idade,especie){
    this.nome=nome;
    this.idade=idade;
    this.especie=especie;
  }
  
printInfo(){
  console.log(this.nome+ ' é um '+this.especie+' e tem '+this.idade+' anos')
}
  
}


class Cachorro extends Animal{
  
  #raca;
  constructor(nome,idade,especie,raca)
  {
    super(nome,idade,especie)
    this.#raca = raca;
  }
  
  printInfo(){
    console.log(this.nome+ ' é um '+this.especie+' da raça '+this.#raca+' e tem '+this.idade+' anos')
  }
  
}


class Gato extends Animal{
  
  cores = [];
  constructor(nome,idade,especie)
  {
    super(nome,idade,especie)
  }
  addcor(cor){
    this.cores.push(cor);
  }

  printInfo(){
    console.log(this.nome+ ' é um '+this.especie+' e tem '+this.idade+' anos, tendo as cores: '+this.cores)
  }

}


let cachorro = new Cachorro('Rex',3,'cachorro','pug');
let gato = new Gato('Miau',2,'gato');
let gorila = new Animal('kong',10,'gorila');

gato.addcor('laranja');
gato.addcor('preto');

cachorro.printInfo();
gato.printInfo();
gorila.printInfo();