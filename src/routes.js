const {Router} = require('express')

const {CreateUserController} = require('./controllers')


const router = Router()



router.post('/create_user' , new CreateUserController().handle )


module.exports = router