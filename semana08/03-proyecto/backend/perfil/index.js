const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3001;

const perfil = 
  { id: 1, user: 'Quendal', email: 'quendal@google.com' }
;

app.use(cors())

app.get('/profile', (req, res) => {
  res.json(perfil);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
