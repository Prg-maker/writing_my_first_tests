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
    

    try{

      const createUser  =  this.users.push({
        id: this._id,
        nome,
        idade
      })
  
  
      return true


    }catch(err){
      return 'user not createa'
    }
  

  }


  async listar(id){
    try{
      const response =  this.users.filter(item => item.id === id)

      return response
    }catch(err){
      return console.log('Erro: user not exist', err)
    }

  }

  async delete(id){

    
    const [response] =  this.users.filter(item => item.id === id)
    
    const newArrayUser = this.users.splice( 1 , response.id )

    console.log(newArrayUser , "new array")
    console.log(this.users , "usersc")

    return response

  }
  
}

module.exports = new UserRepository()