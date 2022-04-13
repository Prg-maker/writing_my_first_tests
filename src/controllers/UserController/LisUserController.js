const User_Service = require('../../services/User_Service')

class ListUserController{

  async handle(req , res){
    const {id} = req.params

    try{
      const response = await User_Service.listar(id)

      if(!response){
        return res.status(400).send({error: "error, not response"})
      }
      

      return res.json(response)
    }catch(err){
      return res.status(400).send('not list user')
    }

    
  }

}


module.exports = ListUserController