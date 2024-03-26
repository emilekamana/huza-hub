
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');


exports.signup = async (req, res, next) => {
    const { username, password, location, fee, serviceType, description } = req.body;
    const userExist = await User.findOne({ username });
    if (userExist) {
        return next(new ErrorResponse("Username already registred", 400));
    }
    try {
        const user = await User.create(req.body);
        console.log(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error);
    }
}


exports.signin = async (req, res, next) => {

    try {
        const { username, password } = req.body;
        //validation
        if (!username) {
            return next(new ErrorResponse("please add an username", 403));
        }
        if (!password) {
            return next(new ErrorResponse("please add a password", 403));
        }

        //check user name
        const user = await User.findOne({ username });
        if (!user) {
            return next(new ErrorResponse("invalid credentials", 400));
        }
        //check password
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse("invalid credentials", 400));
        }

        sendTokenResponse(user, 200, res);

    } catch (error) {
        next(error);
    }
}

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res
        .status(codeStatus)
        .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .json({
            success: true,
            role: user.role,
            userId: user._id,
            user: user,
        })
}


// log out
exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "logged out"
    })
}


// user profile
exports.userProfile = async (req, res, next) => {

    const user = await User.findById(req.user.id).select('-password');

    res.status(200).json({
        success: true,
        user
    })
}




