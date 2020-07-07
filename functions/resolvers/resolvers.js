// Connect to firebase database, which we created in step 3
const admin = require("../database/database");
const _ = require("lodash");
const db = admin.firestore();
// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.

const resolvers = {
  Query: {
    async contacts() {
      const snapshot = await db.collection("contacts").get();
      return snapshot.docs.map((doc) => doc.data());
    },
  },
};

module.exports = resolvers;
