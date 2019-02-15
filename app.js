const {run} = require('khala-nodeutils').baseApp();
const port = process.env.port ? process.env.port : 4000;
const {app} = run(port);
app.get('/', (req, res) => {
	console.info('get ping');
	res.send('pong from server');
});