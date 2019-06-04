const nodeUtils = require('khala-nodeutils');
const {formDataRouter, getRouter} = nodeUtils.baseApp();
const router = getRouter();
const path = require('path');
const cacheDir = path.resolve(__dirname, 'cache');
const property = 'files';

router.post('/', formDataRouter(cacheDir, [property]), (req, res) => {
	res.send(req.files[property].map(({path}) => path));
});
module.exports = router;
