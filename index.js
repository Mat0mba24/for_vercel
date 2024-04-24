const express = require('express');

const app = express();

app.get('/login', (req, res) => res.send('mat0mba'));

app.route('/deg/:n1/:n2').get(r => r.res.send(Number(r.params.n1) ** Number(r.params.n2)));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));