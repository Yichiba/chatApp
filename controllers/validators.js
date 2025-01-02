import express from 'express'
import UserModel from '../models/users.js'

import validator from 'validator'




export const usernamevalidator = async (username) => {
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


export const firstnamevalidator =  (firstname) => {
    const errors = {}

    if(!firstname )
        errors.empty = 'firstname is required '

    if(!validator.isAlpha(firstname) )
        errors.form = 'only alphabets are allowed'
    
    if( !validator.isLength(firstname,{min:3, max:25}))
        errors.length = 'firstname should be between 3 and 15 charachter'

    return errors  
}


export const lastnamevalidator =  (lastname) => {
    const errors = {}

    if(!lastname )
        errors.empty = 'lastname is required '

    if(!validator.isAlpha(lastname) )
        errors.form = 'only alphabets are allowed'
    
    if( !validator.isLength(lastname,{min:3, max:25}))
        errors.length = 'lastname should be between 3 and 15 charachter'

    return errors  
}


export const emailvalidator = async (email) => {
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


export const passwordvalidator = (password,confirm_password) =>{
    const errors = {}

    if(!password || !confirm_password)
        errors.empty = 'password and confirm_password are required'

    if(password !== confirm_password)
        errors.match = 'passwords does not match '
    
    if(!validator.isStrongPassword(password))
        errors.weak='use a strong password'

    return errors
 }

 