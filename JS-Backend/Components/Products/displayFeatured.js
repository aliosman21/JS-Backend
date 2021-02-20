const router = require("express").Router();
const productsSchema = require("./ProductModel");
const connectionToDB = require("../DBConnector/ConnectionHandler");

router.get("/", async (req, res) => {
   connectionToDB.establishConnection();
   //console.log(req.body);
   console.log("HO");
   let lastDoc = (await productsSchema.find({}).sort({ _id: -1 }).limit(1))[0];
   console.log(lastDoc);

   connectionToDB.closeConnection();
});

module.exports = router;
