const mongoose = require("mongoose");
const Schema = mongoose.Schema;




// define the Schema (the structure of the article)
const webprodectSchema = new Schema(  {

    image: String,
    discription_1: String,
    discription_2: String,
    discription_3: String,
    price: String,
    type: String,

  }                        );


  // Create a model based on that schema
const WebprodectSchema = mongoose.model("WebprodectSchema", webprodectSchema);
  


// export the model
module.exports = WebprodectSchema;