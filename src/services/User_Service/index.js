const crypto = require('crypto')
const User = require('../../repositorys/User')


class UserService{


  
  constructor(id){
    this._id = id ?? crypto.randomUUID()
  }

  async create( nome , idade ){


    const user = await User.create(this._id , nome , idade)

    return user

  }

  async listar(id){
    const user = await User.listar(id)
    console.log(user)


  }
  
}

module.exports = new UserService()