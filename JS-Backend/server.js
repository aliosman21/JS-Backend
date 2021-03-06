const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const registerRoute = require("./Components/Users/RegisterRoute");
const loginRoute = require("./Components/Users/LoginRoute");
const productRoute = require("./Components/Products/NewProduct");
const getAllOrdersRoute = require("./Components/Orders/allOrders");
const productEditRoute = require("./Components/Products/editProduct");
const newOrderRoute = require("./Components/Orders/newOrder");
const getFeatured = require("./Components/Products/displayFeatured");
const getByID = require("./Components/Products/displayCartById");
const getAllProducts = require("./Components/Products/getAll");
const editInfoRoute = require("./Components/Users/editUser");
const path = require("path");
dotenv.config();

//const MongoClient = require("mongodb").MongoClient;

//const <route name> = require("route path")

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "../JS-Frontend/assets")));
app.use("/products/featured", getFeatured);
app.use("/User/register", registerRoute);
app.use("/User/login", loginRoute);
app.use("/products/getById", getByID);
app.use("/orders/NewOrder", newOrderRoute);
app.use("/orders/getAll", getAllOrdersRoute);
app.use("/products/editProduct", productEditRoute);
app.use("/products/getALL", getAllProducts);
app.use("/Users/editInfo", editInfoRoute);
app.use("/products/addNewProduct", productRoute);
app.use("/uploads", express.static("uploads"));
//app.use("<route custom name>", const <route name>)
//app.use("/", (req, res) => {});
app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/index.html"));
});
app.get("/products", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/pages/products.html"));
});
app.get("/products/1", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/pages/view-product.html"));
});

app.get("/add-product", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/pages/add-product.html"));
});

app.get("/login-signup", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/pages/loginSignup.html"));
});

app.get("/edit-info", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/pages/edit-info.html"));
});

app.get("/admin-panel", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/pages/admin-panel.html"));
});

app.get("/checkout", (req, res) => {
   res.sendFile(path.join(__dirname, "../JS-Frontend/pages/checkout.html"));
});
app.listen(port, () => console.log("Server is up on port " + port));
