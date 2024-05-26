 const ErrorHandler = require('../utils/errorHandler')
module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

// wrong mongoose object id error
if(err.name === 'castError'){
    const message = `Resource not Found . Invalid: ${err.path}`
    error = new ErrorHandler(message,400)
}


// Handling Mongoose Validation Error Messages
if(err.name === 'ValidationError'){
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorHandler(message,400)
}

    res.status(err.statusCode).json({
        success: false,
        error: err.stack
    })

} 

if(err.name === 'MongoError || 11000 '){
    const message = `This email has already been casted.`
    error = new ErrorHandler(message,400)
}