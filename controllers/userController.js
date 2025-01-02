const UserModel = require('../models/users')
const validator = require('validator')


const usernamevalidator = async (username) => {
    const errors = {}

    if(!username )
        errors.empty = 'username is required '

    if(!validator.isAlphanumeric(username) )
        errors.form = 'only alphanumerique are allowed'
    
    if( !validator.isLength(username,{min:3, max:15}))
        errors.length = 'username should be between 3 and 15 charachter'

    if(!Object.keys(errors).length){
        user = await UserModel.findOne({username})
        if( user )
            errors.exist = 'username already exist '
    }
    return errors  
}


const firstnamevalidator =  (firstname) => {
    const errors = {}

    if(!firstname )
        errors.empty = 'firstname is required '

    if(!validator.isAlpha(firstname) )
        errors.form = 'only alphabets are allowed'
    
    if( !validator.isLength(firstname,{min:3, max:25}))
        errors.length = 'firstname should be between 3 and 15 charachter'

    return errors  
}


const lastnamevalidator =  (lastname) => {
    const errors = {}

    if(!lastname )
        errors.empty = 'lastname is required '

    if(!validator.isAlpha(lastname) )
        errors.form = 'only alphabets are allowed'
    
    if( !validator.isLength(lastname,{min:3, max:25}))
        errors.length = 'lastname should be between 3 and 15 charachter'

    return errors  
}


const emailvalidator = async (email) => {
    const errors = {}

    if(!email )
        errors.empty = 'email is required '

    if(!validator.isEmail(email) )
        errors.form = 'enter a valid email'

    if(!Object.keys(errors).length){
        user = await UserModel.findOne({email})
        if( user )
            errors.exist = 'emails already exist '
    }
    return errors  
}


const passwordvalidator = (password,confirm_password) =>{
    const errors = {}

    if(!password || !confirm_password)
        errors.empty = 'password and confirm_password are required'

    if(password !== confirm_password)
        errors.match = 'passwords does not match '
    
    if(!validator.isStrongPassword(password))
        errors.weak='use a strong password'

    return errors
 }

const createUser = async (req, res) => {
    // console.log(req.body)
    const errors = {}
    username = await usernamevalidator(req.body.username)
    if(Object.keys(username).length)
        errors.username = username

    email = await emailvalidator(req.body.email)
    if(Object.keys(email).length)
        errors.email = email

    firstname = firstnamevalidator(req.body.firstname)
    if(Object.keys(firstname).length)
        errors.firstname = firstname

    lastname = lastnamevalidator(req.body.lastname)
    if(Object.keys(lastname).length)
        errors.lastname = lastname

    password = passwordvalidator(req.body.password,req.body.confirm_password)
    if(Object.keys(password).length)
        errors.password = password
    
    
    if(!Object.keys(errors).length)
        res.send({'success': true , 'message': 'all inputs are valid'})
    
    else
        res.send({'eerors': errors})
    
}


module.exports = {createUser}