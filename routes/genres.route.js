const {Router} = require('express') 
const { genreController } = require('../controllers/Genre.controller') 
const router = Router() 
 
router.get('/genre', genreController.getGenre) 
router.post('/genre', genreController.postGenre) 
router.delete('/genre/:id', genreController.deleteGenre) 
router.patch('/genre/:id', genreController.patchGenre) 
 
module.exports = router