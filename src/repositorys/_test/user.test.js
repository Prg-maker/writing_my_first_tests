const User = require('../User')


  


describe('testing users' , () => {
  it('list user for id ' , async() => {
    
    const user =  {
      id: '15ddb3f0-fcd5-4703-8aa2-ed5580eee7d0',
      nome: 'daniel',
      idade: 18
    }

    const [response] = await User.listar(user.id)

    expect(response).toEqual(user)
  })

  it('create user' , async ()=> {
    const user_fake =  {
      id: '15ddb3f0-fcd5-4703-8aa2-ed5580eee7d0',
      nome: 'daniel',
      idade: 18
    }

    
    const user = {nome: "daniel",idade: 18}
    const {nome , idade} = user



    const response = await User.create(nome , idade)

    const [response_user_listar] = await User.listar(user_fake.id)



    expect(response[1]).toEqual(response_user_listar)


  })
})