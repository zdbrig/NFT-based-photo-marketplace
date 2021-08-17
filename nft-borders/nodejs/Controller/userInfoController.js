const express = require("express");

const users = require("../models/userInfoModels");
var userDao = {};
userDao.getUser = (email) =>
    new Promise((resolve, reject) => {
        users.findOne({ email: email }, (err, res) =>
            err ? reject(err) : resolve({ res })
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