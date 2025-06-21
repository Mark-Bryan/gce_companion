import express from 'express'
const app = express()
const port = 3000

import registerRoute from './routes/register.js'
import resetRoute from './routes/reset.js';

app.use(express.json())
app.use(registerRoute)

app.use(resetRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})