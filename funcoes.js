const cachorros = require('./database/cachorros.json');
const fs= require('fs');
const path = require ('path');


function salvar(cachorro){


    let arquivo = path.resolve(__dirname + '/../database/cachorros.json');
    let json =JSON.stringify(cachorros, null ,4);

    fs.writeFileSync(arquivo, json);
};
function buscar(id){
    let cachorroBuscado = cachorros.find(cachorroBuscado =>{
       return cachorroBuscado.id == id;
    });
    return cachorroBuscado ? cachorroBuscado : `Não existe cachorro com o id ${id}`;
 }
 let funcoes ={
      
    //buscar()
    
    listar: function(){
        console.table(cachorros)
     },
    //listar()
    descrever: function(id){
       let cachorroBuscado = this.buscar(id);
       
       if (cachorroBuscado == false) {
           return 'Cachorro não cadastrado';
       } else {
           return cachorroBuscado;
       }
    },
        //console.log(descrever())
    
    adicionar: function(cachorro){
       
       let ultimoCachorro=cachorros[cachorros.length-1]
       cachorro.id= ultimoCachorro.id+1
       cachorro.vacinas=[]
       cachorro.servicos=[]
       //console.log(cachorros.length)
       cachorros.push(cachorro)
       this.salvar(cachorros)
    },
    // Testando
    //let novoCachorro = {
    //  nome: "Samauma",
    //  sexo: "m",
    //  castrado: true,
    //  dataDeNascimento:"2020-02-27",
    //  peso: 5},
    //(adicionar(novoCachorro))
       
    vacinar: (id, nomeDaVacina, dataDaVacina) => {
          let cachorroBuscado = buscar(id);
          dataDaVacina = new Date
          dataDaVacina = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
    
          if (cachorroBuscado.id){
           cachorroBuscado.vacinas.push({nome: nomeDaVacina, data: dataDaVacina});
             }else{
                console.log("Cachorro inexistente");
          }
             salvar()
       },
       // Testando
    
       //(vacinar(15, "antirrabica"))
    
     
       atribuirServico: (id, nome, data) =>{
          let cachorroBuscado = buscar(id);
          data = new Date;
          dataDoServico = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
          if (cachorroBuscado.id){
              cachorroBuscado.servicos.push({nome: nome, data: data})
             }else{
             console.log("Cachorro Inexistente")
          }
          salvar()
        },
    
        // Testando
        //servicos(16, "Banho e Tosa")
    
    
        remover: function (id){
          let cachorroBuscado= this.buscar(id)
          if(cachorroBuscado.id){
             let index = cachorros.findIndex(cachorro =>cachorro == cachorroBuscado)
             cachorros.splice(index,1)
             this.salvar()
          }else{
             console.log("Animal inexistentente")
          }
          }
       };
    // remover(14)
    
        module.exports = funcoes; 



module.exports =cachorros