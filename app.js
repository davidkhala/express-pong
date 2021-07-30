#!/usr/bin/env node
if (process.argv[2] === 'help') {
    console.info(`
        environments:
            [port]      : default to 80
            [extensions]: post|err|formData, any or any combinations of these options, concat by ','  
        Example:
            extensions=post,err,formData port=3000 node app.js
    `)
    process.exit(0)
}

const {run} = require('khala-nodeutils/baseApp');
const port = process.env.port || 80;

const {app} = run(port);
app.get('/', (req, res) => {
    console.info(`\n from ${req.ips}`);
    res.send('pong\n');
});
require('./extensions')(app, process.env.extensions)
require('./catch')(app)
