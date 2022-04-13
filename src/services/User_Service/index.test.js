const prismaClient = require('../../prisma')
const User_Service = require('./index')
const index = require('./index')

describe('testing index.js ==  testing User  ' , () => {

  it('testing create user', async  ()=> {
    const create = await User_Service.create( 'daniel' , 68)

    const user = await prismaClient.user.findFirst({
      where:{
        nome: 'daniel',
        idade: 68
      }
    })



    expect(user.nome).toEqual(create.nome)
    expect(user.idade).toEqual(create.idade)
    

  })

  it('list user ' , async ()=> {
    const id = 'f024041b-36b3-4669-b4b8-4f57dac7851e'

    const response = await User_Service.listar(id)

    const user = await prismaClient.user.findFirst({
      where:{
        id
      }
    })

    expect(response).toEqual(user)
  })

  


 it('delete user' , async ()=> {
    const id = '1071774e-0813-4824-bdf3-85c375701895'


    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    })

    console.log(user)


    const response = await User_Service.delete(id)
    console.log(response)

    expect(response).toEqual(user)

    
  })


} )