const router = require('express').Router()
const Photo = require('../controllers/PhotosController')

router.post('/', Photo.Create)
router.put('/:photoId', Photo.Update)
router.delete('/:photoId', Photo.Delete)




module.exports = router