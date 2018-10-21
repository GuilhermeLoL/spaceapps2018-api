import express from 'express'
import post from './services/post'
import get from './services/get'
import getById from './services/getById'
const router = express.Router()

router.post('/', post)
router.get('/', get)
router.get('/:id', getById)

export default router
