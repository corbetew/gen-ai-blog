const express = require('express');
const postsRoutes = require('./routes/posts');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express.js!');
});

app.use('/api', postsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
