const admin = require("firebase-admin");

// To generate a private key file for your service account:
// 1. In the Firebase console, open Settings > Service Accounts.
// 2. Click Generate New Private Key, then confirm by clicking Generate Key.
// 3. Store the JSON file in the `functions/resources/` directory

// var serviceAccount = require("../certs/a-functions.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // databaseURL: "https://a-functions-graphql-apollo.firebaseio.com",
// });

admin.initializeApp();

module.exports = admin;
