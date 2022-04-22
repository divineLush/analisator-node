const { v4: uuidv4 } = require('uuid')

exports.getUpload = (req, res) => {
    res.render('upload',  { title: 'upload' })
}

exports.postUpload = (req, res) => {
}
