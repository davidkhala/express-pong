#!/usr/bin/env node
const {run} = require('khala-nodeutils/baseApp');
const port = process.env.port || 80;
const {app} = run(port);
app.get('/', (req, res) => {
    console.info(req.url);
    res.send('pong\n');
});
require('./extensions')(app, process.env.extensions)
require('./catch')(app)
