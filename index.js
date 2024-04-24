const express = require('express');

const app = express();

app.get('/login', (req, res) => res.send('mat0mba'));

app.get('/deg/:n1/:n2', (req, res) => {
	const { n1, n2 } = req.params;

	if (isNaN(n1) || isNaN(n2)) {
		return res.status(400).send('Both n1 and n2 must be numbers');
	}

	res.send(`${Number(n1) ** Number(n2)}`);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));