const express = require("express");

const users = require("../models/userModels");
var userDao = {};
 userDao.getUser = (email) =>
    new Promise((resolve, reject) => {
        users.findOne({ email: email }, (err, res) =>
            err ? reject(err) : resolve({ res })
        );
    });
 
userDao.addUsers = (user) => {
    console.log(user);
    new Promise((resolve, reject) => {
        new users({
            //publicKey: user.publicKey,
            email: user.email,
            password: user.password
            //lastname: user.lastname,
            //username: user.username,
            //photo: user.photo,
        }).save((err) => (err ? reject({ err: err }) : resolve({ res: "ok" })));
    });
};

/* userDao.updateUsers = (id, user) =>
    new Promise((resolve, reject) => {
        console.log("update " + JSON.stringify(user)),
            console.log("id " + JSON.stringify(id)),
            users.findOneAndUpdate({ publicKey: id }, { $set: user }, (err) =>
                err ? reject(err) : resolve({ res: "ok" })
            );
    }); */
module.exports = userDao;
