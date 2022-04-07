const crypto = require('crypto')

class UserRepository {


  constructor(id){
    this.users = [
      {
        id:"1",
        nome: "daniel",
        idade: 18
      },
      {
        id: '15ddb3f0-fcd5-4703-8aa2-ed5580eee7d0',
        nome: 'daniel',
        idade: 18
      }
    ],

    this._id = id ?? crypto.randomUUID()
  }
  


  async create(nome, idade){
    
    const createUser  =  this.users.push({
      id: this._id,
      nome,
      idade
    })



    return this.users

  }


  async listar(id){
    try{
      const response =  this.users.filter(item => item.id === id)

      return response
    }catch(err){
      return console.log('Erro: user not exist', err)
    }

  }
  
}

module.exports = new UserRepository()