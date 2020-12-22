var mongoose = require("mongoose");
var contactSchema = mongoose.Schema(
  { response :[{
    name :{type : String},
    email :{type : String},
    Message : {type : String}
  }]
}

);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Contact = mongoose.model("Message", contactSchema);
module.exports = Contact;