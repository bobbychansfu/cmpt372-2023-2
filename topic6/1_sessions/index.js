const express = require('express')
const session = require('express-session')

const PORT = 3000

const app = express()

app.use(session({
    name: 'session',
    secret: 'secret_string',
    resave: false,
    saveUninitialized: false,
    maxAge: 30*60*1000
}))

app.get('/login', async(requ,resp) => {
    console.log(requ.method)
    // query db for a user with un,pwd
    user = {id:1,username:'bobby'}
    requ.session.user = user
    console.log(`session ID: ${requ.sessionID}`)

    resp.send(`LOGIN`)
})

app.get('/protected_resource', isLoggedIn, async(requ,resp) => {
    console.log(requ.method)
    resp.send(`PORTECTED`)
})

function isLoggedIn(req,res,next){
    if (req.session.user){
        return next()
    } else {
        throw new Error('not logged in!!')
        // redirect??
    }
}

app.listen(PORT, '0.0.0.0')
console.log(`Running on port ${PORT}`)
