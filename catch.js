module.exports = (app)=>{
    // error Handle middleware is order sensitive
    // This should be last part of app
    app.use((err, req, res, next) => {
        console.error(err);
        if (res.headersSent) {
            console.log('res.headersSent');
            return next(err);
        }
        res.status(err.status ? err.status : 500);
        res.send(err);
    });
}