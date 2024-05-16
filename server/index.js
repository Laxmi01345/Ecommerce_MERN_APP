import express from 'express';
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());  
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/Cosmetic_Data");


const postSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  brand: String,
  name: String,
  price: String,
  description: String,
  category: String,
  product_type: String,
  api_featured_image: String,
  rating : String
});

const Products = mongoose.model('Products', postSchema);

async function getPosts() {
  try {
    const data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    const response = await data.json();
    for (let i = 0; i < response.length; i++) {
      const product = new Products({
        id: response[i]['id'],
        brand: response[i]['brand'],
        name: response[i]['name'],
        price: response[i]['price'],

        description: response[i]['description'],
        category: response[i]['category'],
        product_type: response[i]['product_type'],
        api_featured_image: response[i]['api_featured_image'],
        rating: response[i]['rating']
      });
      await product.save();
    }
    console.log("Products inserted successfully");
  } catch (error) {
    console.error("Error inserting products:", error);
  }
}


getPosts();

// Fetch data from Mongodb


app.get('/products', async (req, res) => {
  try {
    console.log("Req :", req.query);
    const queryParameters = {};
    if (req.query.brand) {
      queryParameters.brand = req.query.brand;
    }

    if (req.query.product_type) {
      queryParameters.product_type = req.query.product_type;
    }
    // Check if price range is provided in the query parameters
    if (req.query.price) {
      const priceRange = req.query.price.split('-');
      queryParameters.price = {
        $gte: parseFloat(priceRange[0]), // Convert to number
        $lte: parseFloat(priceRange[1])  // Convert to number
      };
    }

    const products = await Products.find(queryParameters);
    res.json(products);
    
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


const CustomerSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const CustomerModel = mongoose.model("Cutomer_Details",CustomerSchema);

app.post('/register', async (req,res)=>{
  CustomerModel.create(req.body)
  .then(customer => res.json(customer))
  .catch(err => res.json(err))
})   


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
