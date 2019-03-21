const {run} = require('khala-nodeutils').baseApp();
const port = process.env.port ? process.env.port : 80;
const {app} = run(port);
app.get('/', (req, res) => {
	console.info(req.url);
	res.send('pong from server');
});
app.post('/post', (req, res) => {
	console.info(req.url, 'req.body', req.body);
	res.json(req.body);
});