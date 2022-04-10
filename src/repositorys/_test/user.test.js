const prismaClient = require('../../prisma')
const User = require('../User')


  


describe('testing users' , () => {
 

  it('create user' , async ()=> {

    
    const user_fake =  {
      id: '15ddb3f0-fcd5-4703-8aa2-ed5580eee7d0',
      nome: 'daniel',
      idade: 18
    }

    
    const user = {nome: "daniel",idade: 18}
    const {nome , idade} = user



    const response = await User.create(nome , idade)



    expect(response).toBeTruthy()

  })

  it('list user of id ' , async() => {
    


    const response = await User.listar('1')


    expect(response).toBeTruthy()
  })

  it('delete user of id', async ()=> {

    const userArray = await prismaClient.user.findMany()

    const  [userId] = userArray.map(user =>{
      return user.id
    } )


    

    const response = await User.delete(userId)

    expect(response).toBeTruthy()

  })
})