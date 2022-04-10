const prismaClient = require('../../prisma')
const User_Service = require('./index')
const index = require('./index')

describe('testing index.js ==  testing User  ' , () => {

  it('testing create user', async  ()=> {
    const create = await User_Service.create( 'daniel' , 67)

    const user = await prismaClient.user.findFirst({
      where:{
        nome: 'daniel',
        idade: 67
      }
    })



    expect(user.nome).toEqual(create.nome)
    expect(user.idade).toEqual(create.idade)
    

  })

 /* it('list users ' , async ()=> {
    const response = User_Service
  })*/






} )