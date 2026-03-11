const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueName = crypto.randomBytes(16).toString('hex')
        const ext = path.extname(file.originalname)

        cb(null, uniqueName + ext)
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if(file.mimetype.startsWith('audio/')){
            cb(null, true)
        } else{
            cb(new Error('Only audio files allowed'))
        }
    }
})

module.exports = upload