const { https } = require("firebase-functions");

const { app } = require("./");

exports.myExpressApp = https.onRequest(app);
