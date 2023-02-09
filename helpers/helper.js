const authenz = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        if(!access_token) {
            throw { name: 'INVALID_TOKEN'}
        }

        const payload = jwt.verify(access_token, 'sosialMediaAi')

        const findUser = await User.findByPk(payload.id)

        if(!findUser) {
            throw { name: 'INVALID_TOKEN'}
        }

        req.user = {
            id: findUser.id,
            email: findUser.email
        }
        next()
    } catch (err) {
        next(err)
    }
}


// ERROR HANDLER
const errorHandler = (err, req, res, next) => {
    let message = 'Internal Server Error'
    let statusCode = 500

    switch (err.name) {
        case 'SequelizeValidationError':
        case 'SequelizeUniqueConstraintError':
            statusCode = 400
            message = err.errors[0].message
            break;
        case 'INVALID_EMAIL':
            statusCode = 400
            message = 'Email is required'
            break;
        case 'INVALID_PASSWORD':
            statusCode = 400
            message = 'Password is required'
            break;
        case 'UNAUTHORIZED':
            statusCode = 401
            message = 'Invalid email/password'
            break;
        case 'JsonWebTokenError':
        case 'INVALID_TOKEN':
            statusCode = 401
            message = 'Invalid token'
            break;
        case 'NOT_FOUND':
            statusCode = 404
            message = 'Data not found'
            break;
        case 'INVALID_CLUB':
            statusCode = 401
            message = 'You already joined the club!'
            break;
        case 'FORBIDDEN':
            statusCode = 403
            message = 'You are not authorized'
            break;
    }
    res.status(statusCode).json({message})
}


module.exports = { authenz, errorHandler}