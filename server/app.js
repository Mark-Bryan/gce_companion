import express from 'express'
const app = express()
const port = process.env.PORT || 3000

import authRoute from './routes/index.js'

app.use(express.json());

app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /api/auth for authentication routes.')
})
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

module.exports = app;