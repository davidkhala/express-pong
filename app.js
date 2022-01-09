#!/usr/bin/env node
if (process.argv[2] === 'help') {
	console.info(`
        environments:
            [port]      : default to 80
            [extensions]: post|err|formData, any or any combinations of these options, concat by ','  
        Example:
            extensions=post,err,formData port=3000 node app.js
    `);
	process.exit(0);
}

import {run} from '@davidkhala/nodeutils/baseApp.js';
import applyTo from './extensions.js';
import Catch from './catch.js';

const port = process.env.PORT || 80;

const {app} = run(port);
app.get('/', (req, res) => {
	console.info(`\n from ${req.ip}`);
	res.send('\npong\n');
});
applyTo(app, process.env.extensions);
Catch(app);
