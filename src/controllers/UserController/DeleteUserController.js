const User_Service = require('../../services/User_Service')

class DeleteUserController{
  async handle(req , res){
    const {id} = req.params

    try{
      const response = await  User_Service.delete(id)

      if(!response){
        return res.status(400).send('not response')
      }

      return res.json(response)

    }catch(err){
      return res.status(400).send({error:"error when trying to delete a user "})
    }
  }
}

module.exports = DeleteUserController