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

  it('list users ' , async ()=> {


    const response = await User_Service.listar('e21617e6-14e1-4d7b-8bb6-e1e8cf7f6613')

    const user = await prismaClient.user.findFirst({
      where:{
        id: 'e21617e6-14e1-4d7b-8bb6-e1e8cf7f6613'
      }
    })

    expect(response).toEqual(user)
  })






} )