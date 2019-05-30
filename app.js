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

app.get('/err', (req) => {
	throw Error(req.url);
});

//router.post('/createOrUpdateOrg', multerCache.fields([{name: 'admins'}, {name: 'root_certs'}, {name: 'tls_root_certs'}])
app.post('/formData', (req, res) => {

	res.json({formData})
});

//error Handle middleware is order sensitive
app.use((err, req, res, next) => {
	console.error(err);
	if (res.headersSent) {
		console.log('res.headersSent');
		return next(err);
	}
	res.status(err.status ? err.status : 500);
	res.send(err);
});

