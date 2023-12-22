const {products } = require("./constants/data");
const Product = require("./models/productSchema")

const DefaultData = async () => {
    try {
        const insertedProducts = await Product.insertMany(products);
        console.log("Data inserted successfully", insertedProducts);
    } catch (err) {
        console.error("Error while inserting default data", err);
    }
}

module.exports =  DefaultData;