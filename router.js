const { Router } = require('express')
const multer = require('multer')

const getIndex = require('./controllers/routes/index')
const { postUpload } = require('./controllers/routes/upload')

const r = Router()
const upload = multer({ dest: 'uploads/' })

r.get('/', getIndex)
r.post('/upload', upload.single('upload'), postUpload)

module.exports = r
