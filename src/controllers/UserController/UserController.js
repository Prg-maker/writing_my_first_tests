const UserService = require('../../services/User_Service')

class CreateUserController {
  async handle(req , res){
    const {nome , idade}  = req.body



    try{

      if(!nome && !idade){
        return res.status(400).send({error: 'nome ou idade, estão vazios'})
      }

      const user = await UserService.create(nome , idade)


      return res.json(user)

  
    }catch(err){
      return res.status(400).send({error:' User not create' })
    }
  }


}


module.exports =  CreateUserController
