
const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

/*
const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word Document'))
        }
        // if (!file.originalname.endsWith('.pdf')) {
        //     return cb(new Error('Please upload a PDF'))
        // }
        cb(undefined,true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
}); */
// app.use((req , res, next) => {
//     if (req.method == 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
//     console.log(req.method, req.path);
//     next()
// })

// app.use((req, res, next) => {
//         res.status(503).send('Currently under maintainence, try again later!')
// })

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'passMe123'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)
//     const isMatch = await bcrypt.compare('PassMe123', hashedPassword)
//     console.log(isMatch);
// }

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {expiresIn: '7 days'})
//     // console.log(token);
//     const data = jwt.verify(token,'thisismynewcourse')
//     // console.log(data);
//  }

// myFunction()


/*// Getting the data from the relationships of User and Task
const main = async () => {
    //get user from the task
   const task = await Task.findById('60b572941fa1812f699b604c')
   await task.populate('owner').execPopulate()
   console.log(task.owner );

    //Get task from the user
    const user = await User.findById('60b571187bad562f43d43fec')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks);
}

main() */