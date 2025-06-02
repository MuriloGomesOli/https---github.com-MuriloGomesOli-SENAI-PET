 
        function Pet(nome, especie, idade) {
 
            this.nome = nome;
            this.especie = especie;
            this.idade = idade;
 
            this.idadeHumana = function() {
                if (this.especie == "cachorro") {
                    return this.idade * 7
                }
                else if (this.especie == "gato") {
                    return this.idade * 6
                }
                else {
                    return this.idade * 5
                }
            };
 
            this.som = function (){
                 if (this.especie === "cachorro") {
                    return "Au"
                }
                else if (this.especie === "gato") {
                    return "miau"
                }
                else {
                    return "piu"
                }
            }
 
            this.Apresentacao = function (){
                return this.som() + " , eu sou " + this.nome + " eu sou um " + this.especie +
                ".<br>Idade humana de " + this.nome + ": "  + this.idadeHumana();
            }
 
            this.dados = function (){
                return "nome: " + this.nome + ", Espécie: " + this.especie + ", idade: " + this.idade;
            }
            this.pets = function (){
                return "Pet encontrado: " + this.nome + ", Espécie: " + this.especie + ". idade: " + this.idade;
            }
 
        }
 
    const meusPets = [
        new Pet("Rex", "Cachorro", 5),
        new Pet("Mimi", "Gato", 3),
        new Pet("Pingo", "Coelho", 2)
    ];
 
    let resultado = "";
    meusPets.forEach(pet => {
        resultado += pet.Apresentacao();
    });
 
    let resultado1 = "";
    meusPets.forEach(pet => {
        resultado1 += pet.dados() + "<br>";
    });
 
    let resultado3 = "";
    meusPets.forEach(pet => {
        resultado3 += pet.pets();
    });
   
    document.querySelector("#demo1").innerHTML = meusPets[0].Apresentacao();  
    document.querySelector("#demo2").innerHTML = meusPets[1].pets();
    document.querySelector("#demo3").innerHTML = resultado1;
    </script>