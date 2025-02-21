module.exports ={
    test: (req, res, next) => {
        console.log('teste');
        next();

    }
};