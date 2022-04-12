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
    const id = '82e3de0d-e14e-4857-9cd6-a65a2225843c'

    const response = await User_Service.listar(id)

    const user = await prismaClient.user.findFirst({
      where:{
        id
      }
    })

    expect(response).toEqual(user)
  })

  


 it('delete user' , async ()=> {
    const id = '0238ccfc-b51a-46ce-91d8-485a5ca15161'


    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    })



    const response = await User_Service.delete(id)
    expect(response).toEqual(user)

    

  })


} )