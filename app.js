const {run} = require('khala-nodeutils').baseApp();
const {app} = run(4000);
app.get('/', (req, res) => {
	console.info('get ping');
	res.send('pong from server');
});