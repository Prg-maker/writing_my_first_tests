const {Router} = require('express')

const {CreateUserController , ListUserController  , DeleteUserController} = require('./controllers')


const router = Router()



router.post('/create_user' , new CreateUserController().handle )
router.get('/list_user/:id' , new ListUserController().handle )
router.delete('/delete_user/:id' , new DeleteUserController().handle )


module.exports = router