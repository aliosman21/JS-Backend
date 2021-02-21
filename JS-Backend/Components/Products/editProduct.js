const router = require("express").Router();
const productsSchema = require("./ProductModel");
const connectionToDB = require("../DBConnector/ConnectionHandler");

router.patch("/", async (req, res) => {
  connectionToDB.establishConnection();
  const productData = await productsSchema.findOne({ _id: req.body.id });
  let modifications = {};
  console.log(req.body);
  if (productData) {
    console.log("Found him");
    if (req.body.name) {
      modifications.name = req.body.name;
    }
    if (req.body.quantity) {
      modifications.quantity = req.body.quantity;
    }
    if (req.body.description) {
      //hashed password
      modifications.description = req.body.description;
    }
    if (req.body.price) {
      modifications.price = req.body.price;
    }
    try {
      if (req.file.path) {
        modifications.image = "http://localhost:5000/" + req.file.path;
      }
    } catch {
      console.log("no image");
    }

    await productsSchema.findByIdAndUpdate(productData._id, {
      $set: modifications,
    });

    res.send({ success: true, message: "Product Updated" });
  } else {
    console.log("NOT FOUND");
    res.send({ success: false, message: "Something went wrong" });
  }

  connectionToDB.closeConnection();
});

module.exports = router;
