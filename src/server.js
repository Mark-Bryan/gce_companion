const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');


const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000

admin.initializeApp({
    credential: admin.credential.cert(require('./firebase-admin.json'))
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});