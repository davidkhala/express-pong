const applyTo = (app, extensions = '') => {
    const extensionItems = extensions.split(',')
    if (extensionItems.includes('post')) {
        app.post('/post', (req, res) => {
            console.info(req.url, 'req.body', req.body);
            res.json(req.body);
        });
    }
    if (extensionItems.includes('err')) {
        app.get('/err', (req) => {
            throw Error(req.url);
        });
    }
    if (extensionItems.includes('formData')) {
        const {formDataRouter, getRouter} = require('khala-nodeutils/baseApp');
        const router = getRouter();
        const path = require('path');
        const cacheDir = process.env.cache || path.resolve('./');

        router.post('/', formDataRouter(cacheDir, []), (req, res) => {
            console.log('formDataRouter', req.files);
            const result = {};
            for (const {fieldname, path} of req.files) {
                result[fieldname] = path;
            }
            res.json(result);
        });

        app.use('/formData', router);
    }
}


module.exports = applyTo