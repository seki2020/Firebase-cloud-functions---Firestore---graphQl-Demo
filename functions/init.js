const _ = require("lodash");
const { contacts } = require("./init_data.json");

const admin = require("firebase-admin");

const serviceAccount = require("./certs/a-functions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://a-functions-graphql-apollo.firebaseio.com",
});

const db = admin.firestore();

// init data
_.forEach(contacts, async (contact, index) => {
  const { id, favorite, first_name, last_name, profile_pic, url } = contact;

  await db.collection(`contacts`).add({
    id,
    favorite,
    first_name,
    last_name,
    profile_pic,
    url,
  });
});

// // check data
// const data = (async () => {
//   const snapshot = await admin.firestore().collection("contacts").get();

//   return snapshot.docs.map((doc) => doc.data());
// })();
