const express = require('express')
const upload = require('./upload')

const app = express()
const port = process.env.PORT || 3000

app.use('/upload', express.static('uploads'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/upload', upload.single('audio'), (req, res) => {
    if(!req.file){
        return res.status(400).json({
            message: 'File not uploaded'
        })
    }

    res.json({
        message: 'Upload success',
        file: req.file.filename,
        url: `${req.protocol}://${req.get('host')}/upload/${req.file.filename}`
    })
})

app.use((err, req, res, next) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }
    
    next()
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})