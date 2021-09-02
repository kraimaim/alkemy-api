const express = require('express')
const app = express()
const apiRouter = require('./routes/api')



app.use(express.urlencoded({limit: '50mb',parameterLimit:100000,extended: true})); 
app.use(express.json({
    limit:'50mb'
}));

require('./database/db')
require('./asociations')
app.use('/api', apiRouter)

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Api Alkemy')
})

app.listen(PORT, () => {
    console.log(`La app ha arrancado en http://localhost:${PORT}`)
})