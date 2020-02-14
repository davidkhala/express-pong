const {formDataRouter, getRouter} = require('khala-nodeutils/baseApp');
const router = getRouter();
const path = require('path');
const cacheDir = path.resolve(__dirname, 'cache');

router.post('/', formDataRouter(cacheDir, []), (req, res) => {
	console.log('formDataRouter', req.files);
	const result = {};
	for (const {fieldname, path} of req.files) {
		result[fieldname] = path;
	}
	res.json(result);
});
module.exports = router;
