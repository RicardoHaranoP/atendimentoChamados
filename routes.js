import { Router } from 'express'


const routes = Router()

routes.get('/', function(req, res) {
    res.send('Na página Home')
})

routes.get('/sobre', function(req, res) {
    res.send('Na página sobre')
})

export default routes