const crypto = require('crypto')
const User = require('../../repositorys/User')


class UserService{


  

  


  async create( nome , idade ){

    const _id  = crypto.randomUUID()
    const user = await User.create( _id , nome , idade)

    return user

  }


  async listar(id){
    const user = await User.listar(id)

    return user

  }

  async delete(id){
    const user = await User.delete(id)

    return user
  }
  

}

module.exports = new UserService()