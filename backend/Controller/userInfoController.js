const express = require("express");

const users = require("../models/userInfoModels");
var userDao = {};
userDao.getUser = (email) =>
    new Promise((resolve, reject) => {
        users.findOne({ email }, (err, res) =>
            err ? reject(err) : resolve({ res })
        );
    });

userDao.getUserByPublicKey = (publicKey) =>
    new Promise((resolve, reject) => {
        users.findOne({ publicKey }, (err, res) =>
            err ? reject(err) : resolve({ res })
        );
    });

userDao.addUserInfo = (user) => {
    console.log(user);
    new Promise((resolve, reject) => {
        new users({
            publicKey: user.publicKey,
            email: user.email,
            lastname: user.lastname,
            username: user.username,
            photo: user.photo,
        }).save((err) => (err ? reject({ err: err }) : resolve({ res: "ok" })));
    });
};

userDao.updateUserInfo = (id, user) =>
    new Promise((resolve, reject) => {
        console.log("update " + JSON.stringify(user)),
            console.log("id " + JSON.stringify(id)),
            users.findOneAndUpdate({ publicKey: id }, { $set: user }, (err) =>
                err ? reject(err) : resolve({ res: "ok" })
            );
    });
/* userDao.updateUsers = (id, user) =>
    new Promise((resolve, reject) => {
        console.log("update " + JSON.stringify(user)),
            console.log("id " + JSON.stringify(id)),
            users.findOneAndUpdate({ publicKey: id }, { $set: user }, (err) =>
                err ? reject(err) : resolve({ res: "ok" })
            );
    }); */
module.exports = userDao;