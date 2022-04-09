const User = require('../../repositorys/User')

class UserService{

  constructor(id){
    this._id = id ?? crypto.randomUUID()
  }

  async create(id , nome , idade ){


    const user = await User.create(id , nome , idade)

    return user

  }
}