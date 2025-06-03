function Pet(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
 
    this.falar = function () {
        return `Oi eu sou o(a) ${this.nome}, e sou um(a) ${this.especie}`;
    };
 
    this.barulho = function () {
        const especieLower = this.especie.toLowerCase();
        if (especieLower == "cachorro") {
            return "AuAu!";
        } else if (especieLower == "gato") {
            return "Miau!";
        } else {
            return "barulho não identificado";
        }
    };
 
    this.idadeHumana = function () {
        const especieLower = this.especie.toLowerCase();
        if (especieLower === "cachorro") {
            return this.idade * 7;
        } else if (especieLower === "gato") {
            return this.idade * 6;
        } else {
            return this.idade * 5;
        }
    };
}
 
const meusPets = [
    new Pet("Pretinha", 14, "Cachorro"),
    new Pet("Mia", 8, "Gato"),
    new Pet("Ricardinho", 3, "Coelho"),
];
 
 
petsAtualizados.forEach(pet => {
    console.log(pet.falar());
    console.log(`Idade humana do(a) ${pet.nome}: ${pet.idadeHumana()}`);
    console.log(`Meu som é: ${pet.barulho()}`);
    console.log("---------------");
});