const {Schema, model, Types} = require("mongoose");

const schema = new Schema ({
    name:{type: String},
    birthDay:{type: Date},
    email:{type: String, required: true, unique: true},
    phone:{type:String},
    serialPass:{type:String, unique: true},
    selectedDatePass:{type: Date},
    provide:{type: String},
    idPassOffice:{type:String},
    idDrivingLicense:{type:String, unique: true},
    selectedDateDrivingLicence:{type: Date},
    password:{type: String, required: true},
    links: [{type: Types.ObjectId, ref: "Link" }]
});
module.exports = model ("User",schema);