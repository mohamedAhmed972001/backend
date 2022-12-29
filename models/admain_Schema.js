const mongoose = require("mongoose");
const Schema = mongoose.Schema;




// define the Schema (the structure of the article)
const admain_Schema = new Schema(  {

  first_name:String,
  last_name:String,
  password:String,
  email:String,
  phone_number:String,

  }                        );


  // Create a model based on that schema
const Admain_Schema = mongoose.model("Admain_Schema", admain_Schema);
  


// export the model
module.exports = Admain_Schema;