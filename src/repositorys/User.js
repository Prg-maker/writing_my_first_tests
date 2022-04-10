const crypto = require('crypto')
const prismaClient  = require('../prisma')


class UserRepository {

  async create(id , nome, idade ){

    try{

      const userAlreadyExist = await prismaClient.user.findFirst({
        where:{
          id
        }
      })

      if(!userAlreadyExist){

        const createUser =  await prismaClient.user.create({
          data:{
            id,
            nome,
            idade
          }
        })

        return createUser

      }

      return 'user exist'

    }catch(err){
      return 'user not createa'
    }
  

  }
  async listar(id){

    const response = await prismaClient.user.findFirst({
      where:{
        id
      }
    })

    if(!response){
      return 'user not exist'
    }



    return response

  }

  async delete(id){

    const response = await prismaClient.user.delete({
      where:{
        id
      }
    })

    if(!response){
      return 'user not exist'
    }


    return response
  
  }
  
}

module.exports = new UserRepository()